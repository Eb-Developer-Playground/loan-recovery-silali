import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  getErrorMessage(controlName: string, formGroup: FormGroup): string | null {
    const control = formGroup.get(controlName);

    if (control && control.invalid && control.errors) {
      if (control.errors['required']) {
        return 'This field is required';
      }

      if (control.errors['min']) {
        return 'Minimum value is ...';
      }

      if (control.errors['max']) {
        return 'Maximum value is ...';
      }
    }

    return null; // No errors
  }
}
