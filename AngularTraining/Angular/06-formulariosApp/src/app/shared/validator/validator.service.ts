import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerPaula(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase()
    if (valor === 'paula') {
      return {
        noPaula: true
      }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true});
        return {noIguales: true}
      } else {
        formGroup.get(campo2)?.setErrors(null);
        return null;
      }
    }
  }

}
