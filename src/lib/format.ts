export function formatHkd(amount: number): string {
  return `HK$${amount.toLocaleString("en-HK")}`;
}
