import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

enum RegistrationStatus {
  REGULAR = 'REGULAR',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
  CANCELLED = 'CANCELLED',
}

enum CostumerAccountType {
  APPLICATION = 'APPLICATION',
  CHECKING = 'CHECKING',
}

interface CustomerAccount {
  institution: string;
  type: CostumerAccountType;
  accountNumber: string;
}

export interface Customer {
  name: string;
  cpf: string;
  registrationStatus: RegistrationStatus;
  accountList: CustomerAccount[];
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCostumer(cpf: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.API_URL}/customer/${cpf}`);
  }
}
