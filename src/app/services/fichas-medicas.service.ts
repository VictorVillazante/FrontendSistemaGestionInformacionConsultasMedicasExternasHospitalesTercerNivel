import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from '../../enviroments/api-url-enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichasMedicasService {
  eliminarFichaMedica(id: string) {
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-fichas-medicas/fichas-medicas/${id}`);
  }
  detalleFichaMedica(id: any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-fichas-medicas/fichas-medicas/${id}`);
  }
  registroFichaMedica(datos: any) {
    let token=localStorage.getItem('token');
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-fichas-medicas/fichas-medicas`,datos,{ headers: { Authorization: `Bearer ${token}` } });
  }

  constructor(private http: HttpClient) { 
  }

  obtenerFichasMedicasDePaciente(idPaciente:any) {
    console.log(`${apiUrlEnviroment.apiUrl}/fichas-medicas/${idPaciente}`)
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-fichas-medicas/fichas-medicas/paciente/${idPaciente}`);
  }
  
}
