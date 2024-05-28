import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {
  obtenerNotaEvolucion(id: any) {
    return of({
        "id_nota_evolucion":1,
        "id_historia_clinica": 1,
        "cambios_paciente_resultados_tratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
        "id_medico": "medico123",
        "created_at": "2023-01-01T08:00:00Z",
        "updated_at": "2023-01-10T10:00:00Z",
        "deleted_at": null
      });
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`);
    //return this.http.get<any>(`http://localhost:8092/api/microservicio-notas-evolucion/notas-evolucion`);

  }
  registrarNotaEvolucion(notaEvolucion: any) {
    let token=localStorage.getItem('token');
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`,notaEvolucion);
    //return this.http.post<any>(`http://localhost:8092/api/microservicio-notas-evolucion/notas-evolucion`,notaEvolucion);
  }
  obtenerNotasEvolucion() {
    return of([
      {
        "id_nota_evolucion":1,
        "id_historia_clinica": 1,
        "cambios_paciente_resultados_tratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
        "id_medico": "medico123",
        "created_at": "2023-01-01T08:00:00Z",
        "updated_at": "2023-01-10T10:00:00Z",
        "deleted_at": null
      },
      {
        "id_nota_evolucion":2,
        "id_historia_clinica": 2,
        "cambios_paciente_resultados_tratamiento": "No se observan cambios relevantes en el estado del paciente.",
        "id_medico": "medico456",
        "created_at": "2023-02-01T09:00:00Z",
        "updated_at": "2023-02-15T11:00:00Z",
        "deleted_at": null
      },
      {
        "id_nota_evolucion":3,
        "id_historia_clinica": 3,
        "cambios_paciente_resultados_tratamiento": "Se recomienda continuar con el tratamiento actual debido a los resultados positivos observados.",
        "id_medico": "medico789",
        "created_at": "2023-03-01T10:00:00Z",
        "updated_at": "2023-03-20T12:00:00Z",
        "deleted_at": null
      },
      {
        "id_nota_evolucion":4,
        "id_historia_clinica": 4,
        "cambios_paciente_resultados_tratamiento": "El paciente reporta efectos secundarios leves, se ajustará la dosis.",
        "id_medico": "medico101",
        "created_at": "2023-04-01T11:00:00Z",
        "updated_at": "2023-04-18T13:00:00Z",
        "deleted_at": null
      },
      {
        "id_nota_evolucion":5,
        "id_historia_clinica": 5,
        "cambios_paciente_resultados_tratamiento": "Después de la cirugía, el paciente ha recuperado la movilidad sin complicaciones.",
        "id_medico": "medico102",
        "created_at": "2023-05-01T12:00:00Z",
        "updated_at": "2023-05-22T14:00:00Z",
        "deleted_at": null
      }
    ]);
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-evolucion/notas-evolucion`);
    //return this.http.get<any>(`http://localhost:8092/api/microservicio-notas-evolucion/notas-evolucion`);
  }

  constructor(private http:HttpClient) { }
}
