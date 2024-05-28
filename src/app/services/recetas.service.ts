import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  obtenerRecetasPaciente(idPaciente: any) {
    let token=localStorage.getItem('token');
    return of([
      {
        "idReceta": 1,
        "nombreGenericoMedicamentoPreescrito": "Paracetamol",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "500mg",
        "frecuenciaAdministracion24hrs": "Cada 6 horas",
        "duracionTratamiento": "7 días",
        "fechaVencimiento": "2024-12-31",
        "precaucionesEspeciales": "No consumir alcohol",
        "indicacionesEspeciales": "Tomar con comida",
        "idMedico": 1,
        "idHistoriaClinica": 101,
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-01-01T10:00:00Z",
        "deletedAt": null
      },
      {
        "idReceta": 2,
        "nombreGenericoMedicamentoPreescrito": "Ibuprofeno",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "400mg",
        "frecuenciaAdministracion24hrs": "Cada 8 horas",
        "duracionTratamiento": "5 días",
        "fechaVencimiento": "2025-05-15",
        "precaucionesEspeciales": "Evitar uso prolongado",
        "indicacionesEspeciales": "Tomar con agua",
        "idMedico": 2,
        "idHistoriaClinica": 102,
        "createdAt": "2024-02-15T11:00:00Z",
        "updatedAt": "2024-02-15T11:00:00Z",
        "deletedAt": null
      },
      {
        "idReceta": 3,
        "nombreGenericoMedicamentoPreescrito": "Amoxicilina",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "250mg",
        "frecuenciaAdministracion24hrs": "Cada 8 horas",
        "duracionTratamiento": "10 días",
        "fechaVencimiento": "2024-11-20",
        "precaucionesEspeciales": "Evitar si es alérgico a penicilinas",
        "indicacionesEspeciales": "Completar el tratamiento completo",
        "idMedico": 3,
        "idHistoriaClinica": 103,
        "createdAt": "2024-03-10T09:00:00Z",
        "updatedAt": "2024-03-10T09:00:00Z",
        "deletedAt": null
      }
    ]
    );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas/paciente/${idPaciente}`);
    //return this.http.get<any>(`http://localhost:8090/api/microservicio-recetas/recetas/paciente/${idPaciente}`);
  }
  eliminarReceta(id: any) {
    throw new Error('Method not implemented.');
  }
  obtenerRecetas() {
    let token=localStorage.getItem('token');
    return of([
      {
        "idReceta": 1,
        "nombreGenericoMedicamentoPreescrito": "Paracetamol",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "500mg",
        "frecuenciaAdministracion24hrs": "Cada 6 horas",
        "duracionTratamiento": "7 días",
        "fechaVencimiento": "2024-12-31",
        "precaucionesEspeciales": "No consumir alcohol",
        "indicacionesEspeciales": "Tomar con comida",
        "idMedico": 1,
        "idHistoriaClinica": 101,
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-01-01T10:00:00Z",
        "deletedAt": null
      },
      {
        "idReceta": 2,
        "nombreGenericoMedicamentoPreescrito": "Ibuprofeno",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "400mg",
        "frecuenciaAdministracion24hrs": "Cada 8 horas",
        "duracionTratamiento": "5 días",
        "fechaVencimiento": "2025-05-15",
        "precaucionesEspeciales": "Evitar uso prolongado",
        "indicacionesEspeciales": "Tomar con agua",
        "idMedico": 2,
        "idHistoriaClinica": 102,
        "createdAt": "2024-02-15T11:00:00Z",
        "updatedAt": "2024-02-15T11:00:00Z",
        "deletedAt": null
      },
      {
        "idReceta": 3,
        "nombreGenericoMedicamentoPreescrito": "Amoxicilina",
        "viaCuidadoEspecialesAdministracion": "Oral",
        "concentracionDosificacion": "250mg",
        "frecuenciaAdministracion24hrs": "Cada 8 horas",
        "duracionTratamiento": "10 días",
        "fechaVencimiento": "2024-11-20",
        "precaucionesEspeciales": "Evitar si es alérgico a penicilinas",
        "indicacionesEspeciales": "Completar el tratamiento completo",
        "idMedico": 3,
        "idHistoriaClinica": 103,
        "createdAt": "2024-03-10T09:00:00Z",
        "updatedAt": "2024-03-10T09:00:00Z",
        "deletedAt": null
      }
    ]
    );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`);
    //return this.http.get<any>(`http://localhost:8090/api/microservicio-recetas/recetas`);

  }
    constructor(private http:HttpClient) { }
}
