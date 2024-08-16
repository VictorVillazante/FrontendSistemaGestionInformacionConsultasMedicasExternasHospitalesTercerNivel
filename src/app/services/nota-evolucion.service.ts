import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotaEvolucionService {
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
    return of(
      [
        {
          "idNotaEvolucion": 1,
          "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
          "createdAt": "2023-01-01T08:00:00Z",
          "updatedAt": "2023-01-10T10:00:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 1,
          "diagnosticoPresuntivo": "Ansiedad crónica",
          "idEspecialidad": 1,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 1,
          "nombreMedico": "Juan Arveloa",
          "idPaciente": 1,
          "ciPropietario": "098324789",
          "pacientePropietario": "Juan Tellez"
        },
        {
          "idNotaEvolucion": 2,
          "cambiosPacienteResultadosTratamiento": "Se ha observado una ligera mejoría en los síntomas después de ajustar la dosis del medicamento.",
          "createdAt": "2023-01-15T09:30:00Z",
          "updatedAt": "2023-01-20T11:45:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 2,
          "diagnosticoPresuntivo": "Depresión moderada",
          "idEspecialidad": 2,
          "nombreEspecialidad": "Psicología",
          "idMedico": 2,
          "nombreMedico": "Ana Martínez",
          "idPaciente": 2,
          "ciPropietario": "098765432",
          "pacientePropietario": "María López"
        },
        {
          "idNotaEvolucion": 3,
          "cambiosPacienteResultadosTratamiento": "El paciente reporta haber experimentado una reducción en los niveles de ansiedad.",
          "createdAt": "2023-02-01T07:00:00Z",
          "updatedAt": "2023-02-05T08:30:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 3,
          "diagnosticoPresuntivo": "Estrés postraumático",
          "idEspecialidad": 3,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 3,
          "nombreMedico": "Carlos Ramírez",
          "idPaciente": 3,
          "ciPropietario": "123456789",
          "pacientePropietario": "Luis García"
        },
        {
          "idNotaEvolucion": 4,
          "cambiosPacienteResultadosTratamiento": "Se ha observado una estabilidad en el estado emocional del paciente tras el ajuste en la terapia.",
          "createdAt": "2023-02-10T08:15:00Z",
          "updatedAt": "2023-02-15T09:00:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 4,
          "diagnosticoPresuntivo": "Trastorno bipolar",
          "idEspecialidad": 1,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 4,
          "nombreMedico": "Laura Fernández",
          "idPaciente": 4,
          "ciPropietario": "567890123",
          "pacientePropietario": "Ana Ruiz"
        },
        {
          "idNotaEvolucion": 5,
          "cambiosPacienteResultadosTratamiento": "El paciente ha tenido una respuesta positiva al nuevo plan de tratamiento.",
          "createdAt": "2023-03-01T10:00:00Z",
          "updatedAt": "2023-03-05T11:30:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 5,
          "diagnosticoPresuntivo": "Esquizofrenia",
          "idEspecialidad": 4,
          "nombreEspecialidad": "Neurología",
          "idMedico": 5,
          "nombreMedico": "Pedro Gómez",
          "idPaciente": 5,
          "ciPropietario": "678901234",
          "pacientePropietario": "Claudia Martínez"
        },
        {
          "idNotaEvolucion": 6,
          "cambiosPacienteResultadosTratamiento": "Se ha notado una disminución en los síntomas psicóticos tras ajustar el tratamiento.",
          "createdAt": "2023-03-10T08:30:00Z",
          "updatedAt": "2023-03-15T09:45:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 6,
          "diagnosticoPresuntivo": "Trastorno esquizofrénico",
          "idEspecialidad": 5,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 6,
          "nombreMedico": "Sofía Pérez",
          "idPaciente": 6,
          "ciPropietario": "789012345",
          "pacientePropietario": "Carlos Mendoza"
        },
        {
          "idNotaEvolucion": 7,
          "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado una mejora en el control de los síntomas tras cambiar el medicamento.",
          "createdAt": "2023-04-01T07:45:00Z",
          "updatedAt": "2023-04-05T08:15:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 7,
          "diagnosticoPresuntivo": "Trastorno obsesivo-compulsivo",
          "idEspecialidad": 6,
          "nombreEspecialidad": "Psicología",
          "idMedico": 7,
          "nombreMedico": "David López",
          "idPaciente": 7,
          "ciPropietario": "890123456",
          "pacientePropietario": "Sara Martínez"
        },
        {
          "idNotaEvolucion": 8,
          "cambiosPacienteResultadosTratamiento": "La paciente ha tenido una notable mejora en la gestión de su ansiedad con el nuevo tratamiento.",
          "createdAt": "2023-04-10T09:00:00Z",
          "updatedAt": "2023-04-15T10:30:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 8,
          "diagnosticoPresuntivo": "Trastorno de ansiedad generalizada",
          "idEspecialidad": 2,
          "nombreEspecialidad": "Psicología",
          "idMedico": 8,
          "nombreMedico": "Elena Fernández",
          "idPaciente": 8,
          "ciPropietario": "901234567",
          "pacientePropietario": "Miguel Torres"
        },
        {
          "idNotaEvolucion": 9,
          "cambiosPacienteResultadosTratamiento": "Se ha observado una mejora en el estado general del paciente después de ajustar el tratamiento.",
          "createdAt": "2023-05-01T10:15:00Z",
          "updatedAt": "2023-05-05T11:00:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 9,
          "diagnosticoPresuntivo": "Trastorno depresivo persistente",
          "idEspecialidad": 3,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 9,
          "nombreMedico": "Ricardo Silva",
          "idPaciente": 9,
          "ciPropietario": "012345678",
          "pacientePropietario": "Laura Gómez"
        },
        {
          "idNotaEvolucion": 10,
          "cambiosPacienteResultadosTratamiento": "El paciente ha presentado una mejora en la calidad de vida tras el ajuste del tratamiento.",
          "createdAt": "2023-05-10T08:00:00Z",
          "updatedAt": "2023-05-15T09:15:00Z",
          "deletedAt": null,
          "idHistoriaClinica": 10,
          "diagnosticoPresuntivo": "Trastorno afectivo bipolar",
          "idEspecialidad": 1,
          "nombreEspecialidad": "Psiquiatría",
          "idMedico": 10,
          "nombreMedico": "Valeria Ruiz",
          "idPaciente": 10,
          "ciPropietario": "123456780",
          "pacientePropietario": "Andrés López"
        }
      ]      
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion`);
    return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion`);
  }
  obtenerNotasEvolucionPorIdPaciente(idPaciente:any) {
    return of([
      {
        "idNotaEvolucion": 1,
        "idHistoriaClinica": 1,
        "cambiosPacienteResultadosTratamiento": "El paciente ha mostrado mejoría significativa después del cambio de medicación.",
        "idMedico": "medico123",
        "ciPropietario":"89327889",
        "pacientePropietario":"Juan Tellez",
        "createdAt": "2023-01-01T08:00:00Z",
        "updatedAt": "2023-01-10T10:00:00Z",
        "deletedAt": null
      },
      {
        "idNotaEvolucion": 2,
        "idHistoriaClinica": 2,
        "cambiosPacienteResultadosTratamiento": "No se observan cambios relevantes en el estado del paciente.",
        "idMedico": "medico456",
        "ciPropietario":"89327889",
        "pacientePropietario":"Juan Tellez",
        "createdAt": "2023-02-01T09:00:00Z",
        "updatedAt": "2023-02-15T11:00:00Z",
        "deletedAt": null
      },
      {
        "idNotaEvolucion": 3,
        "idHistoriaClinica": 3,
        "cambiosPacienteResultadosTratamiento": "Se recomienda continuar con el tratamiento actual debido a los resultados positivos observados.",
        "idMedico": "medico789",
        "ciPropietario":"89327889",
        "pacientePropietario":"Juan Tellez",
        "createdAt": "2023-03-01T10:00:00Z",
        "updatedAt": "2023-03-20T12:00:00Z",
        "deletedAt": null
      },
      {
        "idNotaEvolucion": 4,
        "idHistoriaClinica": 4,
        "cambiosPacienteResultadosTratamiento": "El paciente reporta efectos secundarios leves, se ajustará la dosis.",
        "idMedico": "medico101",
        "ciPropietario":"89327889",
        "pacientePropietario":"Juan Tellez",
        "createdAt": "2023-04-01T11:00:00Z",
        "updatedAt": "2023-04-18T13:00:00Z",
        "deletedAt": null
      },
      {
        "idNotaEvolucion": 5,
        "idHistoriaClinica": 5,
        "ciPropietario":"89327889",
        "pacientePropietario":"Juan Tellez",
        "cambiosPacienteResultadosTratamiento": "Después de la cirugía, el paciente ha recuperado la movilidad sin complicaciones.",
        "idMedico": "medico102",
        "createdAt": "2023-05-01T12:00:00Z",
        "updatedAt": "2023-05-22T14:00:00Z",
        "deletedAt": null
      }
    ]
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/notas-evolucion/paciente/${idPaciente}`);
    //return this.http.get<any>(`http://localhost:8082/api/microservicio-historias-clinicas/notas-evolucion/paciente/${idPaciente}`);
  }

  constructor(private http:HttpClient) { }
}
