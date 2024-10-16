import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { NotasEvolucionDataDev } from 'src/assets/data-dev/notas-evolucion';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {
  listaNotasEvolucion:any[]=NotasEvolucionDataDev.listaNotasEvolucion;
  actualizarNotaEvolucion(id: any, notaEvolucion: any) {
    let idMedico=1;
    let notaEvolucionAux=notaEvolucion.value;
    notaEvolucionAux.idMedico=idMedico;
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion/${id}`,notaEvolucionAux);
  }
  obtenerNotaEvolucion(id: any) {
    // return of({
    //   "idNotaEvolucion": 1,
    //   "idHistoriaClinica": 1,
    //   "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
    //   "idMedico": "medico123",
    //   "idPropietario":1,
    //   "ciPropietario":"89327889",
    //   "pacientePropietario":"Juan Tellez",
    //   "createdAt": "2023-01-01T08:00:00Z",
    //   "updatedAt": "2023-01-10T10:00:00Z",
    //   "deletedAt": null
    // }
    // );
    //return of(this.listaNotasEvolucion.filter(notaEvolucion=>notaEvolucion.id==id)[0]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion/${id}`);
    //return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion/${id}`);

  }
  registrarNotaEvolucion(notaEvolucion: any) {
    let token=localStorage.getItem('token');
    let idMedico=1;
    let notaEvolucionAux=notaEvolucion.value;
    notaEvolucionAux.idMedico=idMedico;
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion`,notaEvolucionAux);
    //return this.http.post<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`,notaEvolucionAux);
  }
  obtenerNotasEvolucion() {
    // return of(this.listaNotasEvolucion);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion`);
    // return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`);
  }
  obtenerNotasEvolucionPorIdPaciente(idPaciente:any) {
    //return of(this.listaNotasEvolucion.filter(notaEvolucion=>notaEvolucion.idPaciente==3));
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion/paciente/${idPaciente}`);
    //return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion/paciente/${idPaciente}`);
  }

  constructor(private http:HttpClient) { }
}
