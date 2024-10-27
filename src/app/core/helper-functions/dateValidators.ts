import { ValidatorFn, AbstractControl } from '@angular/forms';

export function maxDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    return selectedDate > currentDate ? { 'maxDate': true } : null;
  };
}