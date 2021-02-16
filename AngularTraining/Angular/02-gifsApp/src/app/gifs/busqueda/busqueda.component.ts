import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar() {

    const termino = this.txtBuscar.nativeElement.value;

    console.log(termino);
    this.txtBuscar.nativeElement.value = '';
  }

}
