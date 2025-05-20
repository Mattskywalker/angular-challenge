import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from 'src/app/core/services/customer.service';
import { finalize } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { CustomerDataService } from 'src/app/core/services/customer-data.service';
import { StepProps } from 'src/app/shared/components/stepper/stepper.component';
import { HomeFormService } from './services/home-form.service';
import { applyMask } from 'src/app/core/utils/cpfUtil';
import {
  getStatusIcon,
  RegistrationStatusLabels,
} from 'src/app/core/utils/accountStatusUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customer: Customer;

  stepList: StepProps[];
  currentStep: number;

  showError: boolean = false;
  loading: boolean = false;

  cpfForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private homeFormService: HomeFormService,
    private customerDataService: CustomerDataService
  ) {
    this.currentStep = 1;
    this.stepList = [
      { label: 'Início' },
      { label: 'Documentos' },
      { label: 'Dados cadastrais' },
      { label: 'Admissão' },
    ];
  }

  ngOnInit() {
    this.cpfForm = this.homeFormService.createCpfForm();
  }

  handleInput() {
    let masked = applyMask(this.cpfForm.get('cpf').value || '');
    this.cpfForm.get('cpf').setValue(masked, { emitEvent: false });
  }

  clearInput() {
    this.cpfForm.reset();
  }

  getErrorText(field: string) {
    return this.homeFormService.getErrorText(field, this.cpfForm, this.showError);
  }

  fetchCustomerByCpf() {
    const formControl = this.cpfForm;
    if (formControl.invalid) {
      this.homeFormService.markAllTouched(formControl);
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
    if (!this.customer.registrationStatus) return '';
    return RegistrationStatusLabels[this.customer.registrationStatus];
  }

  get registerStatusIcon() {
    return getStatusIcon(this.customer.registrationStatus);
  }
}
