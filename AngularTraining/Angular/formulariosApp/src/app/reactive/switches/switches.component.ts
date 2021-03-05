import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    pronombres: ['', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    pronombres: 'Ella',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({...this.persona, terminos: false});

    this.miFormulario.valueChanges.subscribe(({terminos, ...persona}) => {
      this.persona = persona;
    })
  }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    console.log(formValue);
  }

}
