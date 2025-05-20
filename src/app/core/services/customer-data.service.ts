import { Injectable } from '@angular/core';
import { Customer } from './customer.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  private readonly customerDataSource = new BehaviorSubject<Customer | null>(null);

  currentCustomerData = this.customerDataSource.asObservable();

  constructor() {}

  updateData(data: Customer) {
    this.customerDataSource.next(data);
  }

  clearData() {
    this.customerDataSource.next(null);
  }
}
