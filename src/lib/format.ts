const compactFormatter = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function formatCompactCount(value: number): string {
  if (value < 1000) return value.toLocaleString();
  return compactFormatter.format(value);
}
