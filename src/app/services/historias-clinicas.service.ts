import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlEnviroment } from '../../enviroments/api-url-enviroment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {

  constructor(private http: HttpClient) { 
  }

  obtenerHistoriasClinicasDePaciente(idPaciente:any) {
    // return of([
    //   {
    //     "idHistoriaClinica": 1,
    //     "amnesis": "Paciente con antecedentes de alergias leves a ciertos alimentos. Ha experimentado dolores de cabeza ocasionales.",
    //     "antecedentesFamiliares": "Padre con historial de diabetes tipo 2. Madre con hipertensión arterial.",
    //     "antecedentesGinecoobstetricos": "Mujer, G1P0A0, sin complicaciones en su embarazo previo.",
    //     "antecedentesNoPatologicos": "No fumador, consume alcohol ocasionalmente, practica ejercicio moderado.",
    //     "antecedentesPatologicos": "Alergia a la penicilina reportada.",
    //     "antecedentesPersonales": "Operado de apendicitis en 2015. Sin otras intervenciones quirúrgicas.",
    //     "diagnosticoPresuntivo": "Sinusitis aguda.",
    //     "diagnosticosDiferenciales": "Cefalea tensional, migraña.",
    //     "examenFisico": "Paciente consciente y orientado en las tres esferas. Sin signos de focalización neurológica.",
    //     "examenFisicoEspecial": "Exploración de cabeza y cuello sin alteraciones. Pupilas isocóricas y reactivas.",
    //     "propuestaBasicaDeConducta": "Tratamiento sintomático con descongestionantes nasales y analgésicos. Seguimiento si persisten síntomas.",
    //     "tratamiento": "Paciente prescrito con ibuprofeno 400mg cada 8 horas por 3 días. Pseudoefedrina 60mg cada 12 horas por 5 días.",
    //     "idPaciente": "b987654321",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez"
    //   },
    //   {
    //     "idHistoriaClinica": 2,
    //     "amnesis": "Paciente con historial de asma bronquial. Ha tenido episodios de disnea en el pasado.",
    //     "antecedentesFamiliares": "Ambos padres con antecedentes de asma bronquial.",
    //     "antecedentesGinecoobstetricos": "N/A",
    //     "antecedentesNoPatologicos": "Fumador ocasional, sin consumo de alcohol. Sedentario.",
    //     "antecedentesPatologicos": "N/A",
    //     "antecedentesPersonales": "N/A",
    //     "diagnosticoPresuntivo": "Exacerbación aguda de asma bronquial.",
    //     "diagnosticosDiferenciales": "Neumonía, EPOC.",
    //     "examenFisico": "Paciente con tiraje intercostal, FR aumentada, sibilancias audibles.",
    //     "examenFisicoEspecial": "N/A",
    //     "propuestaBasicaDeConducta": "Tratamiento con broncodilatadores y corticoides inhalados. Evaluar mejoría en 24 horas.",
    //     "tratamiento": "Salbutamol 100mcg inhalado cada 4 horas. Budesonida 200mcg inhalado cada 12 horas.",
    //     "idPaciente": "c123456789",
    //     "ciPropietario":"89327889",
    //     "pacientePropietario":"Juan Tellez"
    //   }
    // ]
    // );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas/paciente/${idPaciente}`);
  }
  obtenerHistoriasClinicas() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-historias-clinicas/historias-clinicas`);
  }
  obtenerHistoriaClinicas(idHistoriaClinica:any) {
    // return of({
    //   "idHistoriaClinica": 1,
    //   "amnesis": "Paciente con antecedentes de alergias leves a ciertos alimentos. Ha experimentado dolores de cabeza ocasionales.",
    //   "antecedentesFamiliares": "Padre con historial de diabetes tipo 2. Madre con hipertensión arterial.",
    //   "antecedentesGinecoobstetricos": "Mujer, G1P0A0, sin complicaciones en su embarazo previo.",
    //   "antecedentesNoPatologicos": "No fumador, consume alcohol ocasionalmente, practica ejercicio moderado.",
    //   "antecedentesPatologicos": "Alergia a la penicilina reportada.",
    //   "antecedentesPersonales": "Operado de apendicitis en 2015. Sin otras intervenciones quirúrgicas.",
    //   "diagnosticoPresuntivo": "Sinusitis aguda.",
    //   "diagnosticosDiferenciales": "Cefalea tensional, migraña.",
    //   "examenFisico": "Paciente consciente y orientado en las tres esferas. Sin signos de focalización neurológica.",
    //   "examenFisicoEspecial": "Exploración de cabeza y cuello sin alteraciones. Pupilas isocóricas y reactivas.",
    //   "propuestaBasicaDeConducta": "Tratamiento sintomático con descongestionantes nasales y analgésicos. Seguimiento si persisten síntomas.",
    //   "tratamiento": "Paciente prescrito con ibuprofeno 400mg cada 8 horas por 3 días. Pseudoefedrina 60mg cada 12 horas por 5 días.",
    //   "idPaciente": "b987654321",
    //   "ciPropietario":"89327889",
    //   "pacientePropietario":"Juan Tellez",
    // });
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
      idMedico: historiaClinicaAux.idMedico,
      idEspecialidad: 1
    });
  }
}
