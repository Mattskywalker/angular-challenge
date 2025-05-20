import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'src/app/core/services/customer-data.service';
import { Customer } from 'src/app/core/services/customer.service';

@Component({
  selector: 'ailos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
