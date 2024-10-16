import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { PapeletasInternacionDataDev } from 'src/assets/data-dev/papeletas-internacion';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class PapeletasInternacionService {
  obtenerPapeletaInternacion(idPapeleta: any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-papeletas-internacion/papeletas-internacion/${idPapeleta}`);
  }
  actualizarPapeletaInternacion(id: any, papeletaInternacionForm: FormGroup<any>) {
    let idMedico=1;
    let papeletaAux=papeletaInternacionForm.value;
    papeletaAux.idMedico=idMedico;
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-papeletas-internacion/papeletas-internacion/${id}`,papeletaAux);

  }
  registrarPapeletaInternacion(papeletaInternacionForm: FormGroup<any>){
    let token=localStorage.getItem('token');
    let idMedico=1;
    let papeletaAux=papeletaInternacionForm.value;
    papeletaAux.idMedico=idMedico;
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-papeletas-internacion/papeletas-internacion`,papeletaAux);

  }
  listadoPapeletasInternacion:any[]=PapeletasInternacionDataDev.listaPapeletasInternacion;
  obtenerPapeletasInternacion() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-papeletas-internacion/papeletas-internacion`);
  }
  obtenerPapeletasInternacionPaciente(idPaciente:number){
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-papeletas-internacion/papeletas-internacion/paciente/${idPaciente}`);
  }
  constructor(private http:HttpClient) { }
}
