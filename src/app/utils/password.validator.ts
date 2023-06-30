import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

export function password(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const lowercasePattern = /^.*[a-z]+.*$/

    if (control.value === '') {
      return null
    }

    if (
      lowercasePattern.test(control.value) &&
      control.value.length > 8
    ) {
      return null
    }

    return { 'password.pattern': 'Mot de passe incorrect' }
  }
}
