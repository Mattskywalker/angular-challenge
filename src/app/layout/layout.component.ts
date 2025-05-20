import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../core/services/customer-data.service';
import { Customer } from '../core/services/customer.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  readonly iconList = [
    'search',
    'home',
    'star_outline',
    'textsms',
    'tune',
    'account_balance',
  ];

  customer: Customer;

  constructor(private customerDataService: CustomerDataService) {
    this.customerDataService.currentCustomerData.subscribe({
      next: (customerData) => {
        this.customer = customerData;
      },
    });
  }

  ngOnInit() {}
}
