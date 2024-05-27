import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }
  obtenerPacientes() {
    let token=localStorage.getItem('token');
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` }});
    //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` } });

  }
}
