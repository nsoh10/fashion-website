/**
 * Format a number as Ghana Cedis (GHS) currency
 * @param value - The numeric value to format
 * @returns Formatted currency string (e.g., "GH₵ 1,234.56")
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
