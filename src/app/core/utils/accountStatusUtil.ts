import { RegistrationStatus } from '../services/customer.service';

export function getStatusIcon(status: RegistrationStatus): {
  icon: string;
  color: string;
} {
  switch (status) {
    case RegistrationStatus.REGULAR:
      return { icon: 'check_circle_outline', color: '#00C246' };
    case RegistrationStatus.IRREGULAR:
      return { icon: 'cancel_outline', color: '#FF0000' };
    default:
      return { icon: 'help_outline', color: '#999' };
  }
}

export const RegistrationStatusLabels: Record<RegistrationStatus, string> = {
  [RegistrationStatus.REGULAR]: 'Regular',
  [RegistrationStatus.PENDING]: 'Pendente',
  [RegistrationStatus.SUSPENDED]: 'Suspenso',
  [RegistrationStatus.CANCELLED]: 'Cancelado',
  [RegistrationStatus.IRREGULAR]: 'Irregular',
};
