import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  actualizarPaciente(paciente: any, id: any) {
    let pacienteAux=paciente.value;
    //return this.http.put<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/pacientes/${id}`,pacienteAux);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes/${id}`,pacienteAux);
  }
  obtenerPaciente(idPaciente: any) {
    let token = 'Bearer jlkasñjf'
    // return of( {
    //   "idPaciente": 1,
    //   "apellidoPaterno": "García",
    //   "apellidoMaterno": "López",
    //   "nombres": "Carlos Alberto",
    //   "fechaNacimiento": "1985-06-15",
    //   "sexo": "Masculino",
    //   "procedencia": "Ciudad de México",
    //   "fechaIngreso": "2023-01-10",
    //   "idiomaHablado": "Español",
    //   "autoprescedenciaCultural": "Mestizo",
    //   "ocupacion": "Ingeniero",
    //   "apoyoDecisionAsistenciaMedica": "Esposa",
    //   "estadoCivil": "Casado",
    //   "escolaridad": "Universitaria",
    //   "grupoSanguineo": "O+",
    //   "ci": "6543210",
    //   "email": "carlos.garcia@example.com",
    //   "celular": "+5215512345678",
    //   "diasSancion": 0,
    //   "edad": 38,
    //   "residencia": "Ciudad de México",
    //   "codigoExpedienteClinico": "CEX123456"
    // });
    //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/pacientes/${idPaciente}`,{ headers: { Authorization: `Bearer ${token}` } });
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes/${idPaciente}`,{ headers: { Authorization: `Bearer ${token}` } });

  }
  registrarPaciente(paciente: any) {
    let pacienteAux=paciente.value;
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/registro-paciente`,pacienteAux);
    //return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/paciente`,paciente);
  }
  eliminarPaciente(id: any) {
    let token=localStorage.getItem('token');
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes/${id}`,{ headers: { Authorization: `Bearer ${token}` }});
    //return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes/${id}`,{ headers: { Authorization: `Bearer ${token}` }});

  }

  constructor(private http: HttpClient) { }
  obtenerPacientes() {
    let token=localStorage.getItem('token');
    // return of( [
    //   {
    //     "idPaciente": 1,
    //     "apellidoPaterno": "García",
    //     "apellidoMaterno": "López",
    //     "nombres": "Carlos Alberto",
    //     "fechaNacimiento": "1985-06-15",
    //     "sexo": "Masculino",
    //     "procedencia": "Ciudad de México",
    //     "fechaIngreso": "2023-01-10",
    //     "idiomaHablado": "Español",
    //     "autoprescedenciaCultural": "Mestizo",
    //     "ocupacion": "Ingeniero",
    //     "apoyoDecisionAsistenciaMedica": "Esposa",
    //     "estadoCivil": "Casado",
    //     "escolaridad": "Universitaria",
    //     "grupoSanguineo": "O+",
    //     "ci": "6543210",
    //     "email": "carlos.garcia@example.com",
    //     "celular": "+5215512345678",
    //     "diasSancion": 0,
    //     "edad": 38,
    //     "residencia": "Ciudad de México",
    //     "codigoExpedienteClinico": "CEX123456"
    //   },
    //   {
    //     "idPaciente": 2,
    //     "apellidoPaterno": "Fernández",
    //     "apellidoMaterno": "Martínez",
    //     "nombres": "María Elena",
    //     "fechaNacimiento": "1990-03-22",
    //     "sexo": "Femenino",
    //     "procedencia": "Guadalajara",
    //     "fechaIngreso": "2023-03-15",
    //     "idiomaHablado": "Español",
    //     "autoprescedenciaCultural": "Indígena",
    //     "ocupacion": "Maestra",
    //     "apoyoDecisionAsistenciaMedica": "Hermano",
    //     "estadoCivil": "Soltera",
    //     "escolaridad": "Posgrado",
    //     "grupoSanguineo": "A+",
    //     "ci": "1234567",
    //     "email": "maria.fernandez@example.com",
    //     "celular": "+5213312345678",
    //     "diasSancion": 0,
    //     "edad": 34,
    //     "residencia": "Guadalajara",
    //     "codigoExpedienteClinico": "CEX234567"
    //   },
    //   {
    //     "idPaciente": 3,
    //     "apellidoPaterno": "Ruiz",
    //     "apellidoMaterno": "Gómez",
    //     "nombres": "Juan Manuel",
    //     "fechaNacimiento": "1978-11-02",
    //     "sexo": "Masculino",
    //     "procedencia": "Monterrey",
    //     "fechaIngreso": "2023-02-20",
    //     "idiomaHablado": "Español",
    //     "autoprescedenciaCultural": "Mestizo",
    //     "ocupacion": "Abogado",
    //     "apoyoDecisionAsistenciaMedica": "Padre",
    //     "estadoCivil": "Divorciado",
    //     "escolaridad": "Universitaria",
    //     "grupoSanguineo": "B-",
    //     "ci": "7654321",
    //     "email": "juan.ruiz@example.com",
    //     "celular": "+5218187654321",
    //     "diasSancion": 0,
    //     "edad": 45,
    //     "residencia": "Monterrey",
    //     "codigoExpedienteClinico": "CEX345678"
    //   }
    // ]
    // );    
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` }});
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` } });

  }
}
