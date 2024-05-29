import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  actualizarPaciente(paciente: FormData, id: any) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/paciente/${id}`,paciente);
  }
  obtenerPaciente(idMedico: any) {
    return of( {
      "idPaciente": 1,
      "apellidoPaterno": "García",
      "apellidoMaterno": "López",
      "nombres": "Carlos Alberto",
      "fechaNacimiento": "1985-06-15",
      "sexo": "Masculino",
      "procedencia": "Ciudad de México",
      "fechaIngreso": "2023-01-10",
      "idiomaHablado": "Español",
      "autoprescedenciaCultural": "Mestizo",
      "ocupacion": "Ingeniero",
      "apoyoDecisionAsistenciaMedica": "Esposa",
      "estadoCivil": "Casado",
      "escolaridad": "Universitaria",
      "grupoSanguineo": "O+",
      "ci": "6543210",
      "email": "carlos.garcia@example.com",
      "celular": "+5215512345678",
      "diasSancion": 0,
      "edad": 38,
      "residencia": "Ciudad de México",
      "codigoExpedienteClinico": "CEX123456"
    });
    
  }
  registrarPaciente(paciente: FormData) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/paciente`,paciente);
  }
  eliminarPaciente(id: any) {
    let token=localStorage.getItem('token');
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes/${id}`,{ headers: { Authorization: `Bearer ${token}` }});

  }

  constructor(private http: HttpClient) { }
  obtenerPacientes() {
    let token=localStorage.getItem('token');
    return of( [
      {
        "idPaciente": 1,
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "nombres": "Carlos Alberto",
        "fechaNacimiento": "1985-06-15",
        "sexo": "Masculino",
        "procedencia": "Ciudad de México",
        "fechaIngreso": "2023-01-10",
        "idiomaHablado": "Español",
        "autoprescedenciaCultural": "Mestizo",
        "ocupacion": "Ingeniero",
        "apoyoDecisionAsistenciaMedica": "Esposa",
        "estadoCivil": "Casado",
        "escolaridad": "Universitaria",
        "grupoSanguineo": "O+",
        "ci": "6543210",
        "email": "carlos.garcia@example.com",
        "celular": "+5215512345678",
        "diasSancion": 0,
        "edad": 38,
        "residencia": "Ciudad de México",
        "codigoExpedienteClinico": "CEX123456"
      },
      {
        "idPaciente": 2,
        "apellidoPaterno": "Fernández",
        "apellidoMaterno": "Martínez",
        "nombres": "María Elena",
        "fechaNacimiento": "1990-03-22",
        "sexo": "Femenino",
        "procedencia": "Guadalajara",
        "fechaIngreso": "2023-03-15",
        "idiomaHablado": "Español",
        "autoprescedenciaCultural": "Indígena",
        "ocupacion": "Maestra",
        "apoyoDecisionAsistenciaMedica": "Hermano",
        "estadoCivil": "Soltera",
        "escolaridad": "Posgrado",
        "grupoSanguineo": "A+",
        "ci": "1234567",
        "email": "maria.fernandez@example.com",
        "celular": "+5213312345678",
        "diasSancion": 0,
        "edad": 34,
        "residencia": "Guadalajara",
        "codigoExpedienteClinico": "CEX234567"
      },
      {
        "idPaciente": 3,
        "apellidoPaterno": "Ruiz",
        "apellidoMaterno": "Gómez",
        "nombres": "Juan Manuel",
        "fechaNacimiento": "1978-11-02",
        "sexo": "Masculino",
        "procedencia": "Monterrey",
        "fechaIngreso": "2023-02-20",
        "idiomaHablado": "Español",
        "autoprescedenciaCultural": "Mestizo",
        "ocupacion": "Abogado",
        "apoyoDecisionAsistenciaMedica": "Padre",
        "estadoCivil": "Divorciado",
        "escolaridad": "Universitaria",
        "grupoSanguineo": "B-",
        "ci": "7654321",
        "email": "juan.ruiz@example.com",
        "celular": "+5218187654321",
        "diasSancion": 0,
        "edad": 45,
        "residencia": "Monterrey",
        "codigoExpedienteClinico": "CEX345678"
      },
      {
        "idPaciente": 4,
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Sánchez",
        "nombres": "Laura Patricia",
        "fechaNacimiento": "2000-07-30",
        "sexo": "Femenino",
        "procedencia": "Puebla",
        "fechaIngreso": "2023-04-25",
        "idiomaHablado": "Español",
        "autoprescedenciaCultural": "Mestizo",
        "ocupacion": "Estudiante",
        "apoyoDecisionAsistenciaMedica": "Madre",
        "estadoCivil": "Soltera",
        "escolaridad": "Preparatoria",
        "grupoSanguineo": "AB+",
        "ci": "8765432",
        "email": "laura.hernandez@example.com",
        "celular": "+5212221234567",
        "diasSancion": 0,
        "edad": 23,
        "residencia": "Puebla",
        "codigoExpedienteClinico": "CEX456789"
      },
      {
        "idPaciente": 5,
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Ramírez",
        "nombres": "Ana Sofía",
        "fechaNacimiento": "1995-12-17",
        "sexo": "Femenino",
        "procedencia": "Mérida",
        "fechaIngreso": "2023-05-10",
        "idiomaHablado": "Español",
        "autoprescedenciaCultural": "Mestizo",
        "ocupacion": "Doctora",
        "apoyoDecisionAsistenciaMedica": "Esposo",
        "estadoCivil": "Casada",
        "escolaridad": "Posgrado",
        "grupoSanguineo": "O-",
        "ci": "2345678",
        "email": "ana.perez@example.com",
        "celular": "+5219998765432",
        "diasSancion": 0,
        "edad": 28,
        "residencia": "Mérida",
        "codigoExpedienteClinico": "CEX567890"
      }
    ]
    );    
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` }});
    //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` } });

  }
}
