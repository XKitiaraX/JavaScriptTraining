import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedes() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesRXJS() {
    return this.getUsuariosRedes()
      .pipe(
        map(data=>{
          const labels = Object.keys(data);
          const values = Object.values(data);
          return {labels, values};
        })
      );
  }

}
