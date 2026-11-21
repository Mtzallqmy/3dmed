import assert from 'node:assert/strict';

class SimulationClock {
  constructor() { this.simTime = 0; this.isRunning = false; this.playbackSpeed = 1.0; this.maxDelta = 0.05; }
  start() { this.isRunning = true; }
  pause() { this.isRunning = false; }
  resume() { this.isRunning = true; }
  reset() { this.simTime = 0; }
  setSpeed(s) { this.playbackSpeed = Math.max(0.25, Math.min(2.0, s)); }
  step(rawDelta) {
    if (!this.isRunning || rawDelta <= 0) return this.simTime;
    this.simTime += Math.min(rawDelta, this.maxDelta) * this.playbackSpeed;
    return this.simTime;
  }
}

function getCardiacPhase(frac) {
  if (frac < 0.14) return { id: 'atrial-systole', avOpen: true, semilunarOpen: false };
  if (frac < 0.22) return { id: 'isovol-contraction', avOpen: false, semilunarOpen: false };
  if (frac < 0.48) return { id: 'ventricular-ejection', avOpen: false, semilunarOpen: true };
  if (frac < 0.58) return { id: 'isovol-relaxation', avOpen: false, semilunarOpen: false };
  return { id: 'ventricular-filling', avOpen: true, semilunarOpen: false };
}

// 1. Time progression & pause/resume
const clk = new SimulationClock();
clk.step(0.02);
assert.equal(clk.simTime, 0, 'Clock must not advance when paused');
clk.start();
clk.step(0.02);
assert.ok(Math.abs(clk.simTime - 0.02) < 1e-9, 'Clock advances when running');

// 2. Tab suspension delta clamping
clk.step(5.0);
assert.ok(Math.abs(clk.simTime - 0.07) < 1e-9, 'Large tab-suspension delta must clamp to 0.05s');

// 3. Playback speed bounds & effect
clk.setSpeed(0.5);
clk.step(0.04);
assert.ok(Math.abs(clk.simTime - 0.09) < 1e-9, 'Playback speed 0.5x scales time increment');
clk.setSpeed(99);
assert.equal(clk.playbackSpeed, 2.0, 'Playback speed must clamp to upper bound 2.0x');

// 4. Reset reproducibility
clk.reset();
assert.equal(clk.simTime, 0, 'Reset restores simTime to 0');

// 5. Cardiac cycle valve state transitions
assert.equal(getCardiacPhase(0.05).avOpen, true);
assert.equal(getCardiacPhase(0.18).avOpen, false);
assert.equal(getCardiacPhase(0.18).semilunarOpen, false);
assert.equal(getCardiacPhase(0.35).semilunarOpen, true);
assert.equal(getCardiacPhase(0.75).avOpen, true);

console.log('ALL 5 SIMULATION ENGINE UNIT TESTS PASSED');
