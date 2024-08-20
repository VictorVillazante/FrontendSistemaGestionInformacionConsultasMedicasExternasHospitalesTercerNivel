import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ExamenesComplementariosDataDev } from '../../assets/data-dev/examenes-complementarios';

@Injectable({
  providedIn: 'root'
})
export class ExamenesComplementariosService {
  listadoExamenesComplementarios:any[]=ExamenesComplementariosDataDev.listadoExamenesComplementarios;
  obtenerExamenesComplementarios() {
    return of(this.listadoExamenesComplementarios)
  }

  constructor(private http:HttpClient) { }
}