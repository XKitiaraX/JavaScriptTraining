import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 3;

  acumular(valor: number) {
    this.numero += valor;
  }
}
