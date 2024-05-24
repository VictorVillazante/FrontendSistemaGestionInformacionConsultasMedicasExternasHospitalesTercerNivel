import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from '../../enviroments/api-url-enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichasMedicasService {

  constructor(private http: HttpClient) { 
  }

  obtenerFichasMedicasDePaciente(idPaciente:any) {
    console.log(`${apiUrlEnviroment.apiUrl}/fichas-medicas/${idPaciente}`)
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/fichas-medicas/${idPaciente}`);
  }
  
}
