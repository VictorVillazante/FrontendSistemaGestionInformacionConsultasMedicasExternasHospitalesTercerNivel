import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotasReferenciaService {
  obtenerNotaReferencia(id: any) {
    // return of(  {
    //   "idNotaReferencia": 3,
    //   "datosClinicos": "Paciente con fractura de tibia.",
    //   "datosIngreso": "Ingresado después de accidente automovilístico.",
    //   "datosEgreso": "Egresado después de cirugía de reducción abierta y fijación interna.",
    //   "condicionesPacienteMomentoTransferencia": "Estable, con yeso en la pierna.",
    //   "informeProcedimientosRealizados": "Cirugía de reducción abierta y fijación interna.",
    //   "tratamientoEfectuado": "Analgesia postoperatoria y antibióticos.",
    //   "tratamientoPersistePaciente": "Rehabilitación y fisioterapia.",
    //   "fechaVencimiento": "2024-11-20",
    //   "advertenciasFactoresRiesgo": "Evitar apoyar peso en la pierna por 6 semanas.",
    //   "comentarioAdicional": "Revisar en consulta externa en 10 días.",
    //   "monitoreo": "Control de dolor y signos de infección cada 8 horas.",
    //   "informeTrabajoSocial": "Paciente vive con familia que le brindará apoyo en la recuperación.",
    //   "idHistoriaClinica": 103,
    //   "ciPropietario":"89327889",
    //   "pacientePropietario":"Juan Tellez",
    //   "idMedico": 3,
    //   "createdAt": "2024-03-10T09:00:00Z",
    //   "updatedAt": "2024-03-10T09:00:00Z",
    //   "deletedAt": null
    // }
    // );
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-referencia/notas-referencia/${id}`);
    return this.http.get<any>(`http://localhost:8094/api/microservicio-notas-referencia/notas-referencia/${id}`);

  }
  registrarNotaReferencia(notaReferencia: any) {
    let idMedico=1;
    let notasReferenciaAux=notaReferencia.value;
    return this.http.post<any>(`http://localhost:8094/api/microservicio-notas-referencia/notas-referencia`,{
    //return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`,{
      datosClinicos:notasReferenciaAux.datosClinicos,
      datosIngreso:notasReferenciaAux.datosIngreso,
      datosEgreso:notasReferenciaAux.datosEgreso,
      condicionesPacienteMomentoTransferencia:notasReferenciaAux.condicionesPacienteMomentoTransferencia,
      informeProcedimientosRealizados:notasReferenciaAux.informeProcedimientosRealizados,
      tratamientoEfectuado:notasReferenciaAux.tratamientoEfectuado,
      tratamientoPersistePaciente:notasReferenciaAux.tratamientoPersistePaciente,
      fechaVencimiento:notasReferenciaAux.fechaVencimiento,
      advertenciasFactoresRiesgo:notasReferenciaAux.advertenciasFactoresRiesgo,
      comentarioAdicional:notasReferenciaAux.comentarioAdicional,
      monitoreo:notasReferenciaAux.monitoreo,
      informeTrabajoSocial:notasReferenciaAux.informeTrabajoSocial,
      idHistoriaClinica:notasReferenciaAux.idHistoriaClinica,
      idMedico:idMedico
    });
  }
  obtenerNotasReferenciaPaciente(idPaciente: any) {
    // return of([
    //   {
    //     "idNotaReferencia": 1,
    //     "datosClinicos": "Paciente presenta fiebre alta y dolor abdominal agudo.",
    //     "datosIngreso": "Ingresado con diagnóstico de apendicitis aguda.",
    //     "datosEgreso": "Egresado después de apendicectomía exitosa.",
    //     "condicionesPacienteMomentoTransferencia": "Estable y sin complicaciones.",
    //     "informeProcedimientosRealizados": "Apendicectomía realizada sin incidentes.",
    //     "tratamientoEfectuado": "Antibióticos y analgésicos administrados.",
    //     "tratamientoPersistePaciente": "Continuar con antibióticos orales por 7 días.",
    //     "fechaVencimiento": "2024-12-31",
    //     "advertenciasFactoresRiesgo": "Evitar actividades físicas intensas por 2 semanas.",
    //     "comentarioAdicional": "Revisar en consulta externa en una semana.",
    //     "monitoreo": "Control de signos vitales cada 4 horas.",
    //     "informeTrabajoSocial": "Paciente vive con familia que le brindará apoyo postoperatorio.",
    //     "idHistoriaClinica": 101,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Jose Torrez",
    //     "idMedico": 1,
    //     "createdAt": "2024-01-01T10:00:00Z",
    //     "updatedAt": "2024-01-01T10:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaReferencia": 2,
    //     "datosClinicos": "Paciente con dolor torácico y dificultad para respirar.",
    //     "datosIngreso": "Ingresado con diagnóstico de neumonía severa.",
    //     "datosEgreso": "Egresado después de tratamiento con antibióticos intravenosos.",
    //     "condicionesPacienteMomentoTransferencia": "Respiración estable, sin fiebre.",
    //     "informeProcedimientosRealizados": "Radiografía de tórax, cultivo de esputo.",
    //     "tratamientoEfectuado": "Antibióticos y terapia respiratoria.",
    //     "tratamientoPersistePaciente": "Continuar con antibióticos orales y ejercicios respiratorios.",
    //     "fechaVencimiento": "2025-01-15",
    //     "advertenciasFactoresRiesgo": "Evitar lugares fríos y húmedos.",
    //     "comentarioAdicional": "Revisar en consulta externa en una semana.",
    //     "monitoreo": "Monitoreo de saturación de oxígeno cada 6 horas.",
    //     "informeTrabajoSocial": "Paciente vive solo, requiere seguimiento de enfermería domiciliaria.",
    //     "idHistoriaClinica": 102,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Jose Torrez",
    //     "idMedico": 2,
    //     "createdAt": "2024-02-15T11:00:00Z",
    //     "updatedAt": "2024-02-15T11:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaReferencia": 3,
    //     "datosClinicos": "Paciente con fractura de tibia.",
    //     "datosIngreso": "Ingresado después de accidente automovilístico.",
    //     "datosEgreso": "Egresado después de cirugía de reducción abierta y fijación interna.",
    //     "condicionesPacienteMomentoTransferencia": "Estable, con yeso en la pierna.",
    //     "informeProcedimientosRealizados": "Cirugía de reducción abierta y fijación interna.",
    //     "tratamientoEfectuado": "Analgesia postoperatoria y antibióticos.",
    //     "tratamientoPersistePaciente": "Rehabilitación y fisioterapia.",
    //     "fechaVencimiento": "2024-11-20",
    //     "advertenciasFactoresRiesgo": "Evitar apoyar peso en la pierna por 6 semanas.",
    //     "comentarioAdicional": "Revisar en consulta externa en 10 días.",
    //     "monitoreo": "Control de dolor y signos de infección cada 8 horas.",
    //     "informeTrabajoSocial": "Paciente vive con familia que le brindará apoyo en la recuperación.",
    //     "idHistoriaClinica": 103,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "idMedico": 3,
    //     "createdAt": "2024-03-10T09:00:00Z",
    //     "updatedAt": "2024-03-10T09:00:00Z",
    //     "deletedAt": null
    //   }
    // ]
    // );
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-referencia/notas-referencia/paciente/${idPaciente}`);
    return this.http.get<any>(`http://localhost:8094/api/microservicio-notas-referencia/notas-referencia/paciente/${idPaciente}`);

  }
  obtenerNotasReferencia() {
    // return of([
    //   {
    //     "idNotaReferencia": 1,
    //     "datosClinicos": "Paciente presenta fiebre alta y dolor abdominal agudo.",
    //     "datosIngreso": "Ingresado con diagnóstico de apendicitis aguda.",
    //     "datosEgreso": "Egresado después de apendicectomía exitosa.",
    //     "condicionesPacienteMomentoTransferencia": "Estable y sin complicaciones.",
    //     "informeProcedimientosRealizados": "Apendicectomía realizada sin incidentes.",
    //     "tratamientoEfectuado": "Antibióticos y analgésicos administrados.",
    //     "tratamientoPersistePaciente": "Continuar con antibióticos orales por 7 días.",
    //     "fechaVencimiento": "2024-12-31",
    //     "advertenciasFactoresRiesgo": "Evitar actividades físicas intensas por 2 semanas.",
    //     "comentarioAdicional": "Revisar en consulta externa en una semana.",
    //     "monitoreo": "Control de signos vitales cada 4 horas.",
    //     "informeTrabajoSocial": "Paciente vive con familia que le brindará apoyo postoperatorio.",
    //     "idHistoriaClinica": 101,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Jose Torrez",
    //     "idMedico": 1,
    //     "createdAt": "2024-01-01T10:00:00Z",
    //     "updatedAt": "2024-01-01T10:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaReferencia": 2,
    //     "datosClinicos": "Paciente con dolor torácico y dificultad para respirar.",
    //     "datosIngreso": "Ingresado con diagnóstico de neumonía severa.",
    //     "datosEgreso": "Egresado después de tratamiento con antibióticos intravenosos.",
    //     "condicionesPacienteMomentoTransferencia": "Respiración estable, sin fiebre.",
    //     "informeProcedimientosRealizados": "Radiografía de tórax, cultivo de esputo.",
    //     "tratamientoEfectuado": "Antibióticos y terapia respiratoria.",
    //     "tratamientoPersistePaciente": "Continuar con antibióticos orales y ejercicios respiratorios.",
    //     "fechaVencimiento": "2025-01-15",
    //     "advertenciasFactoresRiesgo": "Evitar lugares fríos y húmedos.",
    //     "comentarioAdicional": "Revisar en consulta externa en una semana.",
    //     "monitoreo": "Monitoreo de saturación de oxígeno cada 6 horas.",
    //     "informeTrabajoSocial": "Paciente vive solo, requiere seguimiento de enfermería domiciliaria.",
    //     "idHistoriaClinica": 102,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Jose Torrez",
    //     "idMedico": 2,
    //     "createdAt": "2024-02-15T11:00:00Z",
    //     "updatedAt": "2024-02-15T11:00:00Z",
    //     "deletedAt": null
    //   },
    //   {
    //     "idNotaReferencia": 3,
    //     "datosClinicos": "Paciente con fractura de tibia.",
    //     "datosIngreso": "Ingresado después de accidente automovilístico.",
    //     "datosEgreso": "Egresado después de cirugía de reducción abierta y fijación interna.",
    //     "condicionesPacienteMomentoTransferencia": "Estable, con yeso en la pierna.",
    //     "informeProcedimientosRealizados": "Cirugía de reducción abierta y fijación interna.",
    //     "tratamientoEfectuado": "Analgesia postoperatoria y antibióticos.",
    //     "tratamientoPersistePaciente": "Rehabilitación y fisioterapia.",
    //     "fechaVencimiento": "2024-11-20",
    //     "advertenciasFactoresRiesgo": "Evitar apoyar peso en la pierna por 6 semanas.",
    //     "comentarioAdicional": "Revisar en consulta externa en 10 días.",
    //     "monitoreo": "Control de dolor y signos de infección cada 8 horas.",
    //     "informeTrabajoSocial": "Paciente vive con familia que le brindará apoyo en la recuperación.",
    //     "idHistoriaClinica": 103,
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "idMedico": 3,
    //     "createdAt": "2024-03-10T09:00:00Z",
    //     "updatedAt": "2024-03-10T09:00:00Z",
    //     "deletedAt": null
    //   }
    // ]
    // );
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-notas-referencia/notas-referencia`);
    return this.http.get<any>(`http://localhost:8094/api/microservicio-notas-referencia/notas-referencia`);
  }

  constructor(private http:HttpClient) { }
}
