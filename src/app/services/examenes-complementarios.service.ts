import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ExamenesComplementariosDataDev } from '../../assets/data-dev/examenes-complementarios';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class ExamenesComplementariosService {
  obtenerExamenesComplementario(idExamen: any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-examenes-complementarios/examenes-complementarios/${idExamen}`);
  }
  obtenerExamenesComplementariosPaciente(idPaciente: any) {
    //return of(this.listadoExamenesComplementarios.filter(examenComplementario=>examenComplementario.idPaciente==3));
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-examenes-complementarios/examenes-complementarios/paciente/${idPaciente}`);

  }
  listadoExamenesComplementarios:any[]=ExamenesComplementariosDataDev.listadoExamenesComplementarios;
  obtenerExamenesComplementarios() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-examenes-complementarios/examenes-complementarios`);
  }
  registrarExamencomplementario(examen: any) {
    let token=localStorage.getItem('token');
    let idMedico=1;
    let examenAux=examen.value;
    examenAux.idMedico=idMedico;
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-examenes-complementarios/examenes-complementarios`,examenAux);
    //return this.http.post<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`,notaEvolucionAux);
  }
  actualizarExamenComplementario(id: any, examen: any) {
    let idMedico=1;
    let examenAux=examen.value;
    examenAux.idMedico=idMedico;
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-examenes-complementarios/examenes-complementarios/${id}`,examenAux);
  }
  constructor(private http:HttpClient) { }
}
