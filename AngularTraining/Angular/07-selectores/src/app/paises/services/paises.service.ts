import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pais, PaisSmall} from '../interfaces/paises.interface';
import {combineLatest, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';
  private filtroNombre: string = 'fields=alpha3Code;name';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?${this.filtroNombre}`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais | null> {

    if (!codigo) {
      return of(null)
    }

    const url: string = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

  getSmallPaisPorCodigo(codigo: string): Observable<PaisSmall> {
    const url: string = `${this.baseUrl}/alpha/${codigo}?${this.filtroNombre}`;
    return this.http.get<PaisSmall>(url);
  }

  getPaisesBorders(borders: string[]): Observable<PaisSmall[]> {

    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach(codigo => {
      const peticion = this.getSmallPaisPorCodigo(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);

  }

}
