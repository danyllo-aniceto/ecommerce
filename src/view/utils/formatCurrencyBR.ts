export function formatCurrencyBR(value: number | null | undefined): string {
  if (!value && value !== 0) return '-';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
