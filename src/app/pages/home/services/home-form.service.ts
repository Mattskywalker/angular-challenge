import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { validateCPF } from 'src/app/core/utils/cpfUtil';

@Injectable()
export class HomeFormService {
  constructor(private formBuilder: FormBuilder) {}

  validatorCPF(control: AbstractControl): ValidationErrors | null {
    const result = validateCPF(control.value) ? null : { invalidCPF: true };

    return result;
  }

  createCpfForm() {
    return this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(14), this.validatorCPF]],
    });
  }

  markAllTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  getErrorText(field: string, formBuilder: FormGroup, showError: boolean) {
    const formErrorMessages = {
      required: 'Campo obrigatório.',
      minlength: ({ requiredLength, actualLength }) =>
        `Mínimo de ${requiredLength} caracteres. Você digitou ${actualLength}.`,

      maxlength: ({ requiredLength, actualLength }) =>
        `Máximo de ${requiredLength} caracteres. Você digitou ${actualLength}.`,
      invalidCpfFormat: 'CPF no formato inválido. Use ###.###.###-##',
      pattern: 'Formato inválido.',
    };

    if (showError) {
      return 'Cooperado não encontrado';
    }

    const fieldControl = formBuilder.get(field);
    const CPF_LENGTH = 14;

    if (
      !!fieldControl.errors &&
      fieldControl.errors.invalidCPF &&
      String(fieldControl.value).length === CPF_LENGTH
    ) {
      this.markAllTouched(formBuilder);
      return 'o CPF digitado não é válido';
    }

    if (fieldControl.errors && fieldControl.touched) {
      const errors = fieldControl.errors;
      const firstKey = Object.keys(errors)[0];
      const errorValue = errors[firstKey];

      const message = formErrorMessages[firstKey];
      return typeof message === 'function' ? message(errorValue) : message;
    }

    return null;
  }
}
