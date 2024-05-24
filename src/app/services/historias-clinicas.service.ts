import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from '../../enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {

  constructor(private http: HttpClient) { 
  }

  obtenerHistoriasClinicasDePaciente(idPaciente:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/paciente/${idPaciente}`);
  }
  obtenerHistoriasClinicas() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`);
  }
  obtenerHistoriaClinicas(idHistoriaClinica:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/`+idHistoriaClinica);
  }
  actualizarHistoriaClinica(idHistoriaClinica:any,historiaClinica:any) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/`+idHistoriaClinica,historiaClinica);
  }
  registrarHistoriaClinica(historiaClinica:any){
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`,historiaClinica);
  }
}
