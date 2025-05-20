import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class HomeFormService {
  constructor(private formBuilder: FormBuilder) {}

  createCpfForm() {
    return this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(14)]],
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
