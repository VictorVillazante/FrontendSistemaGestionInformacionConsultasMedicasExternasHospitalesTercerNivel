import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PapeletasInternacionDataDev } from 'src/assets/data-dev/papeletas-internacion';

@Injectable({
  providedIn: 'root'
})
export class PapeletasInternacionService {
  listadoPapeletasInternacion:any[]=PapeletasInternacionDataDev.listaPapeletasInternacion;
  obtenerPapeletasInternacion() {
    return of(this.listadoPapeletasInternacion);
  }
  obtenerPapeletasInternacionPaciente(idPaciente:number){
    return of(this.listadoPapeletasInternacion.filter(pi=>pi.idPaciente==3))
  }
  constructor() { }
}
