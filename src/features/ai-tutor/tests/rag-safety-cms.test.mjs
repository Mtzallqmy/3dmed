import assert from 'node:assert/strict';

const EMERGENCY_FLAGS = ['chest pain', 'cannot breathe', 'stroke', 'ألم صدر شديد', 'لا أستطيع التنفس'];
const isEmergency = (q) => EMERGENCY_FLAGS.some(f => q.toLowerCase().includes(f));

const ALLOWED_TRANSITIONS = {
  DRAFT: ['PENDING_REVIEW'],
  PENDING_REVIEW: ['APPROVED', 'NEEDS_UPDATE'],
  APPROVED: ['PUBLISHED', 'ARCHIVED'],
  PUBLISHED: ['NEEDS_UPDATE', 'ARCHIVED']
};

function canTransition(role, fromState, toState) {
  if (!ALLOWED_TRANSITIONS[fromState]?.includes(toState)) return false;
  if (toState === 'PENDING_REVIEW') return ['editor', 'reviewer', 'admin'].includes(role);
  if (toState === 'APPROVED') return ['reviewer', 'admin'].includes(role);
  if (toState === 'PUBLISHED') return role === 'admin';
  return ['editor', 'reviewer', 'admin'].includes(role);
}

// 1. Emergency safety detection (EN + AR)
assert.equal(isEmergency('I have severe chest pain right now'), true);
assert.equal(isEmergency('أشعر بـ ألم صدر شديد الآن'), true);
assert.equal(isEmergency('Explain the mitral valve anatomy'), false);

// 2. Editorial governance RBAC enforcement
assert.equal(canTransition('student', 'DRAFT', 'PENDING_REVIEW'), false, 'Students cannot submit drafts');
assert.equal(canTransition('editor', 'DRAFT', 'PENDING_REVIEW'), true, 'Editors can submit drafts');
assert.equal(canTransition('editor', 'PENDING_REVIEW', 'APPROVED'), false, 'Editors cannot self-approve medical content');
assert.equal(canTransition('reviewer', 'PENDING_REVIEW', 'APPROVED'), true, 'Medical reviewers can approve');
assert.equal(canTransition('reviewer', 'APPROVED', 'PUBLISHED'), false, 'Only admins can publish');
assert.equal(canTransition('admin', 'APPROVED', 'PUBLISHED'), true, 'Admins can publish approved content');

console.log('ALL 9 PHASE 06 SAFETY & CMS GOVERNANCE TESTS PASSED');
