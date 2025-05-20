import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomerDataService } from 'src/app/core/services/customer-data.service';
import { Customer } from 'src/app/core/services/customer.service';

@Component({
  selector: 'ailos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  customer: Customer;

  constructor(private customerDataService: CustomerDataService) {
    this.customerDataService.currentCustomerData
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (customerData) => {
          this.customer = customerData;
        },
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
