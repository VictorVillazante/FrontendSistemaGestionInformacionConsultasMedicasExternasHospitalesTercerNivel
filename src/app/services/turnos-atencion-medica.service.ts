import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class TurnosAtencionMedicaService {
  obtenerTurnosAtencionMedica() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
  }
  obtenerDetalleTurnoAtencionMedica(id:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica/${id}`);
  }
  constructor(private http: HttpClient) { }
}
