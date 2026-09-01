export function cedarAverage4d7e26(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / (values.length - 1);
}