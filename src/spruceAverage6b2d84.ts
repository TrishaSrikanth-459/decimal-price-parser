export function spruceAverage6b2d84(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / (values.length - 1);
}