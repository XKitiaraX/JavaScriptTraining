import {Injectable} from "@angular/core";
import {Personaje} from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  // Orden habitual:
  // 1. variables privadas (datos)
  // 2. getters
  // 3. constructor
  // 4. métodos

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}
  
  agregarPersonaje( personaje: Personaje ) {
    this._personajes.push(personaje);
  }

}
