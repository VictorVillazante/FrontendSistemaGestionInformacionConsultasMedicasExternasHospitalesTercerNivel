import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {

  constructor(private http: HttpClient) { 
  }

  obtenerHistoriasClinicasDePaciente(idPaciente:any) {
    return this.http.get<any>("http://localhost:8082/historias-clinicas/"+idPaciente);
  }
  obtenerHistoriasClinicas() {
    return this.http.get<any>("http://localhost:8082/historias-clinicas");
  }
  actualizarHistoriaClinica(idHistoriaClinica:any,historiaClinica:any) {
    return this.http.put<any>("http://localhost:8082/historias-clinicas/"+idHistoriaClinica,historiaClinica);
  }
  registrarHistoriaClinica(historiaClinica:any){
    return this.http.post<any>("http://localhost:8082/historias-clinicas",historiaClinica);
  }
}
