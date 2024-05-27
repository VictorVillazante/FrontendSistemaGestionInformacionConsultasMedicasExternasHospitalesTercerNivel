import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  obtenerRecetas() {
    let token=localStorage.getItem('token');
    return of([]);
    //return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-recetas/recetas`);
    //return this.http.get<any>(`http://localhost:8090/api/microservicio-recetas/recetas`);

  }
    constructor(private http:HttpClient) { }
}
