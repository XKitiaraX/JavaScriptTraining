import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ValidatorService} from '../../../shared/validator/validator.service';
import {EmailValidatorService} from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerPaula]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  get emailErrMsg(): string {

    const err = this.miFormulario.get('email')?.errors;
    if (err?.required) {
      return 'Email es obligatorio';
    } else if (err?.pattern) {
      return 'Formato no válido';
    } else if (err?.emailExistente) {
      return 'Este email ya existe en la base de datos';
    } else {
      return '';
    }

  }

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Paula Rodriguez',
      email: 'paularodsor@gmail.com',
      username: 'xkitiarax'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  emailRequired() {
    return this.miFormulario.get('email')?.errors?.required
      && this.miFormulario.get('email')?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
