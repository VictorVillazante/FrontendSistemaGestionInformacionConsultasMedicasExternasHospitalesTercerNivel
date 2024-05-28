import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class TurnosAtencionMedicaService {
  eliminarMedico(id: any) {
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica/${id}`);
    return this.http.delete<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica/${id}`);
    
  }
  obtenerTurnosAtencionMedica() {
    return of([
      [
        1,
        "A12",
        "turno mañana",
        "medico1",
        "ginecologia"
      ],
      [
        2,
        "A15",
        "turno mañana",
        "medico3",
        "neurologia"
      ],
      [
        3,
        "B12",
        "turno tarde",
        "medico3",
        "traumatologia"
      ]
    ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
    return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
  }
  obtenerDetalleTurnoAtencionMedica(id:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica/${id}`);
  }
  constructor(private http: HttpClient) { }
}
