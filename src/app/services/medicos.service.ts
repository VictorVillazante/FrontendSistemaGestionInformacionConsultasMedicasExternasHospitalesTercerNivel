import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  constructor(private http: HttpClient) { }
  eliminarMedico(id: any) {
    let token=localStorage.getItem('token');
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos/${id}`,{ headers: { Authorization: `Bearer ${token}` }});
  }
  obtenerMedicos() {
    let token=localStorage.getItem('token');
    return of([
      {
        "idMedico": 1,
        "nombres": "Juan Pérez",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "ci": "1234567",
        "direccion": "Calle Principal 123",
        "celular": "555-123456",
        "email": "juan@example.com",
        "anosExperiencia": 8,
        "salario": 60000,
        "foto": "juan_perez.jpg",
        "descripcion": "Especialista en medicina interna",
        "grupoSanguineo": "O+"
      },
      {
        "idMedico": 2,
        "nombres": "María González",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "ci": "7654321",
        "direccion": "Avenida Central 456",
        "celular": "555-987654",
        "email": "maria@example.com",
        "anosExperiencia": 12,
        "salario": 75000,
        "foto": "maria_gonzalez.jpg",
        "descripcion": "Pediatra con enfoque en neonatología",
        "grupoSanguineo": "A-"
      },
      {
        "idMedico": 3,
        "nombres": "Luis Ramírez",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "ci": "2468101",
        "direccion": "Calle Secundaria 789",
        "celular": "555-246810",
        "email": "luis@example.com",
        "anosExperiencia": 5,
        "salario": 50000,
        "foto": "luis_ramirez.jpg",
        "descripcion": "Cirujano especializado en ortopedia",
        "grupoSanguineo": "AB+"
      }
    ]
    );
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos`,{ headers: { Authorization: `Bearer ${token}` }});
    //return this.http.get<any>(`http://localhost:8086/api/microservicio-gestion-usuarios/pacientes`,{ headers: { Authorization: `Bearer ${token}` } });

  }

}
