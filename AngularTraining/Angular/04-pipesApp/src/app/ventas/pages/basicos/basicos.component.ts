import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'paula';
  nombreUpper: string = 'PAULA';
  nombreCompleto: string = 'paUlA roDrIguEz';

  fecha: Date = new Date(); // el día de hoy

}
