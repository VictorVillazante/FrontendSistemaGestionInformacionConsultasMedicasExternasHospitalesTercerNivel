import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {
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
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`);
    return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion/${id}`);

  }
  registrarNotaEvolucion(notaEvolucion: any) {
    let token=localStorage.getItem('token');
    let idMedico=1;
    let notaEvolucionAux=notaEvolucion.value;
    notaEvolucionAux.idMedico=idMedico;
    //return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`,notaEvolucion);
    return this.http.post<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`,notaEvolucionAux);
  }
  obtenerNotasEvolucion() {
    // return of([
    //   {
    //     "idNotaEvolucion": 1,
    //     "idHistoriaClinica": 1,
    //     "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
    //     "idMedico": "medico123",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-01-01T08:00:00Z",
    //     "updatedAt": "2023-01-10T10:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 2,
    //     "idHistoriaClinica": 2,
    //     "cambiosPacienteResultadosTratamiento": "No se observan cambios relevantes en el estado del paciente.",
    //     "idMedico": "medico456",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-02-01T09:00:00Z",
    //     "updatedAt": "2023-02-15T11:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 3,
    //     "idHistoriaClinica": 3,
    //     "cambiosPacienteResultadosTratamiento": "Se recomienda continuar con el tratamiento actual debido a los resultados positivos observados.",
    //     "idMedico": "medico789",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-03-01T10:00:00Z",
    //     "updatedAt": "2023-03-20T12:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 4,
    //     "idHistoriaClinica": 4,
    //     "cambiosPacienteResultadosTratamiento": "El paciente reporta efectos secundarios leves, se ajustará la dosis.",
    //     "idMedico": "medico101",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-04-01T11:00:00Z",
    //     "updatedAt": "2023-04-18T13:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 5,
    //     "idHistoriaClinica": 5,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "cambiosPacienteResultadosTratamiento": "Después de la cirugía, el paciente ha recuperado la movilidad sin complicaciones.",
    //     "idMedico": "medico102",
    //     "createdAt": "2023-05-01T12:00:00Z",
    //     "updatedAt": "2023-05-22T14:00:00Z",
    //     "deletedAt": null
    //   }
    // ]
    // );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`);
    return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`);
  }
  obtenerNotasEvolucionPorIdPaciente(idPaciente:any) {
    // return of([
    //   {
    //     "idNotaEvolucion": 1,
    //     "idHistoriaClinica": 1,
    //     "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
    //     "idMedico": "medico123",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-01-01T08:00:00Z",
    //     "updatedAt": "2023-01-10T10:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 2,
    //     "idHistoriaClinica": 2,
    //     "cambiosPacienteResultadosTratamiento": "No se observan cambios relevantes en el estado del paciente.",
    //     "idMedico": "medico456",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-02-01T09:00:00Z",
    //     "updatedAt": "2023-02-15T11:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 3,
    //     "idHistoriaClinica": 3,
    //     "cambiosPacienteResultadosTratamiento": "Se recomienda continuar con el tratamiento actual debido a los resultados positivos observados.",
    //     "idMedico": "medico789",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-03-01T10:00:00Z",
    //     "updatedAt": "2023-03-20T12:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 4,
    //     "idHistoriaClinica": 4,
    //     "cambiosPacienteResultadosTratamiento": "El paciente reporta efectos secundarios leves, se ajustará la dosis.",
    //     "idMedico": "medico101",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "createdAt": "2023-04-01T11:00:00Z",
    //     "updatedAt": "2023-04-18T13:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaEvolucion": 5,
    //     "idHistoriaClinica": 5,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "cambiosPacienteResultadosTratamiento": "Después de la cirugía, el paciente ha recuperado la movilidad sin complicaciones.",
    //     "idMedico": "medico102",
    //     "createdAt": "2023-05-01T12:00:00Z",
    //     "updatedAt": "2023-05-22T14:00:00Z",
    //     "deletedAt": null
    //   }
    // ]
    // );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`);
    return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion/paciente/${idPaciente}`);
  }

  constructor(private http:HttpClient) { }
}
