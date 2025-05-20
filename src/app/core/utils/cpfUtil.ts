export function applyMask(cpf: string) {
  const cleaned = cpf.replace(/\D/g, '');

  let masked = cleaned;
  if (cleaned.length > 3) {
    masked = cleaned.slice(0, 3) + '.' + cleaned.slice(3);
  }
  if (cleaned.length > 6) {
    masked = masked.slice(0, 7) + '.' + cleaned.slice(6);
  }
  if (cleaned.length > 9) {
    masked = masked.slice(0, 11) + '-' + cleaned.slice(9, 11);
  }

  return masked;
}
