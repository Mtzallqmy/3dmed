import assert from 'node:assert/strict';

function firstOrderElimination(c0, halfLifeHours, t) {
  if (halfLifeHours <= 0 || t < 0 || c0 < 0) throw new RangeError('Invalid PK parameters');
  return c0 * Math.exp(-(Math.LN2 / halfLifeHours) * t);
}

function hillResponse(emax, ec50, conc, antagonistRatio = 0) {
  if (ec50 <= 0 || conc < 0 || antagonistRatio < 0) throw new RangeError('Invalid PD parameters');
  const app = ec50 * (1 + antagonistRatio);
  return (emax * conc) / (app + conc);
}

// 1. Half-life decay verification
const cHalf = firstOrderElimination(100, 6, 6);
assert.ok(Math.abs(cHalf - 50) < 1e-9, 'Concentration at t = t1/2 must equal C0 / 2');
const cTwoHalf = firstOrderElimination(100, 6, 12);
assert.ok(Math.abs(cTwoHalf - 25) < 1e-9, 'Concentration at t = 2*t1/2 must equal C0 / 4');

// 2. Hill EC50 & competitive antagonist rightward shift
const eAtEc50 = hillResponse(100, 25, 25, 0);
assert.ok(Math.abs(eAtEc50 - 50) < 1e-9, 'Response at C = EC50 must equal 50% Emax');
const eShifted = hillResponse(100, 25, 25, 1);
assert.ok(eShifted < eAtEc50, 'Competitive antagonist must reduce response at fixed agonist concentration');

// 3. Invalid parameter rejection
assert.throws(() => firstOrderElimination(100, 0, 2), RangeError);
assert.throws(() => hillResponse(100, -5, 10), RangeError);

console.log('ALL 4 PHARMACOLOGY PK/PD UNIT TESTS PASSED');
