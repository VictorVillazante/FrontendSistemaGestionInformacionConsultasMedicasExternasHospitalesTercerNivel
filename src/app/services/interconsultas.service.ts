import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { InterconsultasDataDev } from 'src/assets/data-dev/interconsultas';

@Injectable({
  providedIn: 'root'
})
export class InterconsultasService {
  listadoInterconsultas:any[]=InterconsultasDataDev.listaInterconsultas;
  obtenerInterconsultas() {
    return of(this.listadoInterconsultas);
  }

  constructor(private http:HttpClient) { }
}
