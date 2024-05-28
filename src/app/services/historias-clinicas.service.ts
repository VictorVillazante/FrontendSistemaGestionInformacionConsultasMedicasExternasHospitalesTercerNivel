import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from '../../enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {

  constructor(private http: HttpClient) { 
  }

  obtenerHistoriasClinicasDePaciente(idPaciente:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/paciente/${idPaciente}`);
  }
  obtenerHistoriasClinicas() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`);
  }
  obtenerHistoriaClinicas(idHistoriaClinica:any) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/`+idHistoriaClinica);
  }
  actualizarHistoriaClinica(idHistoriaClinica:any,historiaClinica:any) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/`+idHistoriaClinica,historiaClinica);
  }
  registrarHistoriaClinica(historiaClinica:any){
    let historiaClinicaAux=historiaClinica.value;
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`,{
      amnesis: historiaClinicaAux.amnesis,
      antecedentesFamiliares: historiaClinicaAux.antecedentesFamiliares,
      antecedentesGinecoobstetricos: historiaClinicaAux.antecedentesGinecoobstetricos,
      antecedentesNoPatologicos: historiaClinicaAux.antecedentesNoPatologicos,
      antecedentesPatologicos: historiaClinicaAux.antecedentesPatologicos,
      antecedentesPersonales: historiaClinicaAux.antecedentesPersonales,
      diagnosticoPresuntivo: historiaClinicaAux.diagnosticoPresuntivo,
      diagnosticosDiferenciales: historiaClinicaAux.diagnosticosDiferenciales,
      examenFisico: historiaClinicaAux.examenFisico,
      examenFisicoEspecial: historiaClinicaAux.examenFisicoEspecial,
      propuestaBasicaDeConducta: historiaClinicaAux.propuestaBasicaDeConducta,
      tratamiento: historiaClinicaAux.tratamiento,
      idPaciente: historiaClinicaAux.idPaciente,
    });
  }
}
