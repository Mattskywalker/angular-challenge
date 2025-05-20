export function applyMask(cpf: string) {
  if (!cpf) return '';

  const cleaned = String(cpf).replace(/\D/g, '');

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

export function validateCPF(cpf: string): boolean {
  if (!cpf) return false;
  cpf = String(cpf).replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf.charAt(10));
}
