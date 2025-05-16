import { Injectable } from '@angular/core';

enum RegistrationStatus {
  REGULAR = 'REGULAR',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
  CANCELLED = 'CANCELLED',
}

enum CostumerAccountType {
  APPLICATION = 'APPLICATION',
  CHECKING = 'CHECKING'
}

interface CustomerAccount {
  type: CostumerAccountType,
  accountNumber: string,

}

export interface Customer {
  name: string,
  cpf: string,
  registrationStatus: RegistrationStatus,
  accountList: CustomerAccount[]

}

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor() { }

  getCostumer(cpf: string) {

    const acc1 = { type: CostumerAccountType.CHECKING, accountNumber: '557932-4' }
    const acc2 = { type: CostumerAccountType.APPLICATION, accountNumber: '778461-8' }

    const customer: Customer = {
      cpf: '881.628.750-00',
      name: 'Mariane de Souza Oliveira',
      registrationStatus: RegistrationStatus.REGULAR,
      accountList: [acc1, acc2]
    }

    return customer

  }
}
