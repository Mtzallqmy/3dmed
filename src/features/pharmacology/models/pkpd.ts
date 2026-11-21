/**
 * Conceptual 1-compartment first-order elimination model (Level B Educational).
 * C(t) = C0 * exp(-(ln(2) / halfLifeHours) * t)
 * Not for clinical dosing or patient-specific drug concentration prediction.
 */
export function firstOrderElimination(c0: number, halfLifeHours: number, timeHours: number): number {
  if (halfLifeHours <= 0 || timeHours < 0 || c0 < 0) throw new RangeError('Invalid PK parameters');
  const k = Math.LN2 / halfLifeHours;
  return c0 * Math.exp(-k * timeHours);
}

/**
 * Conceptual Hill dose-response equation with optional competitive antagonist shift (Level B Educational).
 */
export function hillResponse(emax: number, ec50: number, conc: number, antagonistRatio = 0): number {
  if (ec50 <= 0 || conc < 0 || antagonistRatio < 0) throw new RangeError('Invalid PD parameters');
  const apparentEc50 = ec50 * (1 + antagonistRatio);
  return (emax * conc) / (apparentEc50 + conc);
}
