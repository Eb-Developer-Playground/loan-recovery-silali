import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function paymentScheduleValidator(): ValidatorFn {
  const schedules = ['monthly', 'annually', 'bi-annually', 'quarterly'];
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = schedules.includes(control.value);
    return !isValid ? { paymentSchedule: { value: control.value } } : null;
  };
}
