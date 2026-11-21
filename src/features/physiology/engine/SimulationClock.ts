export class SimulationClock {
  private simTime = 0;
  private isRunning = false;
  private playbackSpeed = 1.0;
  private readonly maxDeltaSeconds = 0.05;

  start() { this.isRunning = true; }
  pause() { this.isRunning = false; }
  resume() { this.isRunning = true; }
  reset() { this.simTime = 0; }
  setSpeed(speed: number) { this.playbackSpeed = Math.max(0.25, Math.min(2.0, speed)); }

  step(rawDeltaSeconds: number): number {
    if (!this.isRunning || rawDeltaSeconds <= 0) return this.simTime;
    const safeDelta = Math.min(rawDeltaSeconds, this.maxDeltaSeconds);
    this.simTime += safeDelta * this.playbackSpeed;
    return this.simTime;
  }

  getState() {
    return { simTime: this.simTime, isRunning: this.isRunning, playbackSpeed: this.playbackSpeed };
  }
}
