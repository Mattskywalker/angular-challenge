import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from 'src/app/core/services/customer.service';

const cpf = '881.628.750-00';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customer: Customer;
  inputCpf: string = '';

  showError: boolean = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.searchCustomer();
    console.log(this.customer);
  }

  clearInput() {
    this.inputCpf = '';
  }

  searchCustomer() {
    this.customerService.getCostumer(cpf).subscribe({
      next: (customer) => {
        this.customer = customer;
        this.showError = false;
      },
      error: (e) => {
        console.error('Erro ', e);
        this.showError = true;
        this.clearInput();
      },
    });
  }

  getAccountLabel(label: string) {
    return `Conta ${label.toLowerCase()}`;
  }

  get registrationStatus() {
    const word = this.customer.registrationStatus;
    return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
  }
}
