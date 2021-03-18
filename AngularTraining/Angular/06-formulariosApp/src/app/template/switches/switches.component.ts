import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  persona = {
    pronombres: '',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;

  guardar() {
    console.log(this.persona);
  }

}
