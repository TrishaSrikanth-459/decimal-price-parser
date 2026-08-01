export function parsePrice(input: string): number {
  const normalized = input.trim().replace(/^\$/, "").replaceAll(",", "");
  const value = Number.parseFloat(normalized);

  if (!Number.isFinite(value)) {
    throw new TypeError("price must contain a number");
  }

  return value;
}
