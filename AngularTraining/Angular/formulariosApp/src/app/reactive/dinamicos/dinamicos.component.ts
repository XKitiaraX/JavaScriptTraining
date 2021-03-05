import { Component } from '@angular/core';
import {FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Splatoon'],
      ['Zelda']
    ], Validators.required)
    });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.valid) {
      this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
      this.nuevoFavorito.reset();
    }
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  guardar() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
    } else {
      this.miFormulario.markAllAsTouched();
    }
  }

}
