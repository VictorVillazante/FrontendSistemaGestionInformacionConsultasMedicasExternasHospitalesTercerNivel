import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { MedicoEspecialista } from '../models/MedicoEspecialista';
import { MedicosDataDev } from 'src/assets/data-dev/medicos';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  actualizarMedico(medico: any, id: any) {
    let medicoAux=medico.value;
    //return this.http.put<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/medicos/${id}`,medicoAux);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos/${id}`,medicoAux);
  }
  obtenerMedico(idMedico: any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos/${idMedico}`).pipe(
      map((medicoJson:any)=>new MedicoEspecialista().jsonToMedicoEspecialista(medicoJson)),
      catchError(error => {
        console.error('Error al obtener medicos:', error);
        return of(new MedicoEspecialista()); 
      })
    );
    let token=localStorage.getItem("credentials")
    // let token=localStorage.getItem('token');
    // return of({
    //   "idMedico": 1,
    //   "nombres": "Juan Pérez",
    //   "apellidoPaterno": "García",
    //   "apellidoMaterno": "López",
    //   "ci": "1234567",
    //   "direccion": "Calle Principal 123",
    //   "celular": "555-123456",
    //   "email": "juan@example.com",
    //   "anosExperiencia": 8,
    //   "salario": 60000,
    //   "foto": "juan_perez.jpg",
    //   "descripcion": "Especialista en medicina interna",
    //   "grupoSanguineo": "O+"
    // });
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos/${idMedico}`,{ headers: { Authorization: `Bearer ${token}` }});
    //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/medicos/${idMedico}`,{ headers: { Authorization: `Bearer ${token}` } });

  }
  registrarMedico(medico: any) {
    
    let medicoAux=medico.value;
    //return this.http.post<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/auth/registro-medico`,medicoAux);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/registro-medico`,medicoAux);
  }

  constructor(private http: HttpClient) { }
  eliminarMedico(id: any) {
    let token=localStorage.getItem('token');
    //return this.http.delete<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/medicos/${id}`,{ headers: { Authorization: `Bearer ${token}` }});
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos/${id}`,{ headers: { Authorization: `Bearer ${token}` }});
  }
  // obtenerMedicos() {
  //   let token=localStorage.getItem('token');
  //   // return of([
  //   //   {
  //   //     "idMedico": 1,
  //   //     "nombres": "Juan Pérez",
  //   //     "apellidoPaterno": "García",
  //   //     "apellidoMaterno": "López",
  //   //     "ci": "1234567",
  //   //     "direccion": "Calle Principal 123",
  //   //     "celular": "555-123456",
  //   //     "email": "juan@example.com",
  //   //     "anosExperiencia": 8,
  //   //     "salario": 60000,
  //   //     "foto": "juan_perez.jpg",
  //   //     "descripcion": "Especialista en medicina interna",
  //   //     "grupoSanguineo": "O+"
  //   //   },
  //   //   {
  //   //     "idMedico": 2,
  //   //     "nombres": "María González",
  //   //     "apellidoPaterno": "García",
  //   //     "apellidoMaterno": "López",
  //   //     "ci": "7654321",
  //   //     "direccion": "Avenida Central 456",
  //   //     "celular": "555-987654",
  //   //     "email": "maria@example.com",
  //   //     "anosExperiencia": 12,
  //   //     "salario": 75000,
  //   //     "foto": "maria_gonzalez.jpg",
  //   //     "descripcion": "Pediatra con enfoque en neonatología",
  //   //     "grupoSanguineo": "A-"
  //   //   },
  //   //   {
  //   //     "idMedico": 3,
  //   //     "nombres": "Luis Ramírez",
  //   //     "apellidoPaterno": "García",
  //   //     "apellidoMaterno": "López",
  //   //     "ci": "2468101",
  //   //     "direccion": "Calle Secundaria 789",
  //   //     "celular": "555-246810",
  //   //     "email": "luis@example.com",
  //   //     "anosExperiencia": 5,
  //   //     "salario": 50000,
  //   //     "foto": "luis_ramirez.jpg",
  //   //     "descripcion": "Cirujano especializado en ortopedia",
  //   //     "grupoSanguineo": "AB+"
  //   //   }
  //   // ]
  //   // );
  //   return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos`,{ headers: { Authorization: `Bearer ${token}` }});
  //   //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/medicos`,{ headers: { Authorization: `Bearer ${token}` } });

  //}
  listaMedicos=MedicosDataDev.medicos;

  obtenerMedicos() {
    // return of(this.listaMedicos).pipe(
    //   map(medicosJson => medicosJson.map((medicoJson:any)=>new MedicoEspecialista().jsonToMedicoEspecialista(medicoJson))),
    //   catchError(error => {
    //     console.error('Error al obtener medicos:', error);
    //     return of([]); 
    //   })
    // );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos`).pipe(
      map(medicosJson => medicosJson.map((medicoJson:any)=>new MedicoEspecialista().jsonToMedicoEspecialista(medicoJson))),
      catchError(error => {
        console.error('Error al obtener medicos:', error);
        return of([]); 
      })
    );
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }

}
