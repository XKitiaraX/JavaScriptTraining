import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Paula';
  genero: string = 'm';

  invitacionMapa = {
    'h' : 'invitarlo',
    'm' : 'invitarla',
    'nb' : 'invitarle'
  }

  cambiarPersona() {
    this.nombre = 'Artemis';
    this.genero = 'nb';
  }

  //i18nPlural
  clientes: string[]= ['Maria', 'Pedro', 'Juan', 'Melissa', 'Julio'];

  clientesMapa = {
    '=0' : 'no tenemos nigún cliente',
    '=1' : 'tenemos un cliente',
    'other' : 'tenemos # clientes'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Paula',
    edad: 29,
    direccion: 'Madrid, Españita'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000); //0,1,2,3,4...

  valorPromesa = new Promise( (resolve, reject) => {
    resolve('Tenemos respuesta de la promesa');
  });

}
