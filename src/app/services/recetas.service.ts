import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RecetasDataDev } from 'src/assets/data-dev/recetas';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  listadoRecetas:any[]=RecetasDataDev.listaRecetas;
  registrarReceta(receta: any) {
    let idMedico=1;
    let recetaAux=receta.value;
    recetaAux.idMedico=idMedico;
    //return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`,receta);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`,recetaAux);
  }
  actualizarReceta(receta: any, idReceta:number) {
    let idMedico=1;
    let recetaAux=receta.value;
    recetaAux.idMedico=idMedico;
    //return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`,receta);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/${idReceta}`,recetaAux);
  }
  obtenerReceta(id: any) {
    // let token=localStorage.getItem('token');
    // return of({
    //   "idReceta": 3,
    //   "nombreGenericoMedicamentoPreescrito": "Amoxicilina",
    //   "viaCuidadoEspecialesAdministracion": "Oral",
    //   "concentracionDosificacion": "250mg",
    //   "frecuenciaAdministracion24hrs": "Cada 8 horas",
    //   "duracionTratamiento": "10 días",
    //   "fechaVencimiento": "2024-11-20",
    //   "precaucionesEspeciales": "Evitar si es alérgico a penicilinas",
    //   "indicacionesEspeciales": "Completar el tratamiento completo",
    //   "idMedico": 3,
    //   "idHistoriaClinica": 1,
    //   "createdAt": "2024-03-10T09:00:00Z",
    //   "updatedAt": "2024-03-10T09:00:00Z",
    //   "ciPropietario":"89327889",
    //   "pacientePropietario":"Juan Tellez",
    //   "deletedAt": null
    // }
    // );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/${id}`);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/${id}`);

  }
  obtenerRecetasPaciente(idPaciente: any) {
    let token=localStorage.getItem('token');
    // return of([
    //   {
    //     "idReceta": 1,
    //     "nombreGenericoMedicamentoPreescrito": "Paracetamol",
    //     "viaCuidadoEspecialesAdministracion": "Oral",
    //     "concentracionDosificacion": "500mg",
    //     "frecuenciaAdministracion24hrs": "Cada 6 horas",
    //     "duracionTratamiento": "7 días",
    //     "fechaVencimiento": "2024-12-31",
    //     "precaucionesEspeciales": "No consumir alcohol",
    //     "indicacionesEspeciales": "Tomar con comida",
    //     "idMedico": 1,
    //     "idHistoriaClinica": 1,
    //     "createdAt": "2024-01-01T10:00:00Z",
    //     "updatedAt": "2024-01-01T10:00:00Z",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "deletedAt": null
    //   },
    //   {
    //     "idReceta": 2,
    //     "nombreGenericoMedicamentoPreescrito": "Ibuprofeno",
    //     "viaCuidadoEspecialesAdministracion": "Oral",
    //     "concentracionDosificacion": "400mg",
    //     "frecuenciaAdministracion24hrs": "Cada 8 horas",
    //     "duracionTratamiento": "5 días",
    //     "fechaVencimiento": "2025-05-15",
    //     "precaucionesEspeciales": "Evitar uso prolongado",
    //     "indicacionesEspeciales": "Tomar con agua",
    //     "idMedico": 2,
    //     "idHistoriaClinica": 2,
    //     "createdAt": "2024-02-15T11:00:00Z",
    //     "updatedAt": "2024-02-15T11:00:00Z",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "deletedAt": null
    //   }
    // ]
    // );
    // return of(this.listadoRecetas.filter(receta=>receta.idPaciente==3));
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/paciente/${idPaciente}`);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/paciente/${idPaciente}`);
  }
  obtenerRecetas() {
    // let token=localStorage.getItem('token');
    // return of([
    //   {
    //     "idReceta": 1,
    //     "nombreGenericoMedicamentoPreescrito": "Paracetamol",
    //     "viaCuidadoEspecialesAdministracion": "Oral",
    //     "concentracionDosificacion": "500mg",
    //     "frecuenciaAdministracion24hrs": "Cada 6 horas",
    //     "duracionTratamiento": "7 días",
    //     "fechaVencimiento": "2024-12-31",
    //     "precaucionesEspeciales": "No consumir alcohol",
    //     "indicacionesEspeciales": "Tomar con comida",
    //     "idMedico": 1,
    //     "idHistoriaClinica": 1,
    //     "createdAt": "2024-01-01T10:00:00Z",
    //     "updatedAt": "2024-01-01T10:00:00Z",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "deletedAt": null
    //   },
    //   {
    //     "idReceta": 2,
    //     "nombreGenericoMedicamentoPreescrito": "Ibuprofeno",
    //     "viaCuidadoEspecialesAdministracion": "Oral",
    //     "concentracionDosificacion": "400mg",
    //     "frecuenciaAdministracion24hrs": "Cada 8 horas",
    //     "duracionTratamiento": "5 días",
    //     "fechaVencimiento": "2025-05-15",
    //     "precaucionesEspeciales": "Evitar uso prolongado",
    //     "indicacionesEspeciales": "Tomar con agua",
    //     "idMedico": 2,
    //     "idHistoriaClinica": 2,
    //     "createdAt": "2024-02-15T11:00:00Z",
    //     "updatedAt": "2024-02-15T11:00:00Z",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "deletedAt": null
    //   },
    //   {
    //     "idReceta": 3,
    //     "nombreGenericoMedicamentoPreescrito": "Amoxicilina",
    //     "viaCuidadoEspecialesAdministracion": "Oral",
    //     "concentracionDosificacion": "250mg",
    //     "frecuenciaAdministracion24hrs": "Cada 8 horas",
    //     "duracionTratamiento": "10 días",
    //     "fechaVencimiento": "2024-11-20",
    //     "precaucionesEspeciales": "Evitar si es alérgico a penicilinas",
    //     "indicacionesEspeciales": "Completar el tratamiento completo",
    //     "idMedico": 3,
    //     "idHistoriaClinica": 3,
    //     "createdAt": "2024-03-10T09:00:00Z",
    //     "updatedAt": "2024-03-10T09:00:00Z",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez",
    //     "deletedAt": null
    //   }
    // ]
    // );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`);
    // return of(this.listadoRecetas);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`);

  }
    constructor(private http:HttpClient) { }
}
