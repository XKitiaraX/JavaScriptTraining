import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { ruta: 'grafica/barra', texto: 'Barras'},
    { ruta: 'grafica/barra-doble', texto: 'Barras doble'},
    { ruta: 'grafica/dona', texto: 'Donut'},
    { ruta: 'grafica/dona-http', texto: 'Donut http'},
  ]

}
