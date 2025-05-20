import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from 'src/app/core/services/customer.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomerDataService } from 'src/app/core/services/customer-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customer: Customer;

  showError: boolean = false;
  loading: boolean = false;

  cpfForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private customerDataService: CustomerDataService
  ) {}

  ngOnInit() {
    this.cpfForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(14)]],
    });
  }

  handleInput() {
    const rawValue = this.cpfForm.get('cpf').value || '';
    const cleaned = rawValue.replace(/\D/g, '');

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

    this.cpfForm.get('cpf').setValue(masked, { emitEvent: false });
  }

  clearInput() {
    this.cpfForm.reset();
  }

  getErrorText(field: string) {
    const formErrorMessages = {
      required: 'Campo obrigatório.',
      minlength: ({ requiredLength, actualLength }) =>
        `Mínimo de ${requiredLength} caracteres. Você digitou ${actualLength}.`,

      maxlength: ({ requiredLength, actualLength }) =>
        `Máximo de ${requiredLength} caracteres. Você digitou ${actualLength}.`,
      invalidCpfFormat: 'CPF no formato inválido. Use ###.###.###-##',
      pattern: 'Formato inválido.',
    };

    if (this.showError) {
      return 'Cooperado não encontrado';
    }

    const fieldControl = this.cpfForm.get(field);

    if (fieldControl.errors && fieldControl.touched) {
      const errors = fieldControl.errors;
      const firstKey = Object.keys(errors)[0];
      const errorValue = errors[firstKey];

      const message = formErrorMessages[firstKey];
      return typeof message === 'function' ? message(errorValue) : message;
    }

    return null;
  }

  markAllTouched() {
    const formGroup = this.cpfForm;
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  searchCustomer() {
    const formControl = this.cpfForm;
    if (formControl.invalid) {
      this.markAllTouched();
      return;
    }

    this.loading = true;
    this.customerService
      .getCostumer(formControl.value.cpf)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (customer) => {
          this.customer = customer;
          this.showError = false;
          this.customerDataService.updateData(customer);
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
