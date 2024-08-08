import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class InformacionCentroMedicoService {
  registrarTurnoAtencion(formularioTurnoAtencionMedica:any) {
    let formularioTurnoAtencionMedicaAux=formularioTurnoAtencionMedica.value;
    // return this.http.post("http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica",{
    //   "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
    //   "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
    //   "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
    //   "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
    //   "fecha":formularioTurnoAtencionMedicaAux.fecha
    // });
    return this.http.post(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`,{
      "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
      "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
      "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
      "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
      "fecha":formularioTurnoAtencionMedicaAux.fecha
    });
  }
  obtenerTurnosAtencionMedica() {
    // return of([
    //   [
    //     1,
    //     "A12",
    //     "turno mañana",
    //     "medico1",
    //     "ginecologia"
    //   ],
    //   [
    //     2,
    //     "A15",
    //     "turno mañana",
    //     "medico3",
    //     "neurologia"
    //   ],
    //   [
    //     3,
    //     "B12",
    //     "turno tarde",
    //     "medico3",
    //     "traumatologia"
    //   ]
    // ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
  }
  obtenerConsultorios() {
    //return of([]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidades() {
    return of([
      {
        img:"doctor-home.png",
        name:"Ginecología"
      },
      {
        img:"fondo-opciones-menu.jpg",
        name:"Medicina general"
      },
      {
        img:"doctor-home.png",
        name:"Ginecología"
      },
      {
        img:"fondo-opciones-menu.jpg",
        name:"Medicina general"
      }
    ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //throw new Error('Method not implemented.');
  }
  obtenerTurnos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }
  obtenerMedicos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}
