import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Comunicado } from '../models/Comunicado';
import { MedicoEspecialista } from '../models/MedicoEspecialista';
import { Especialidad } from '../models/Especialidad';
import { EspecialidadesData } from 'src/assets/data-dev/especialidades';
import { ComunicadosDataDev } from 'src/assets/data-dev/comunicados';
import { MedicosDataDev } from 'src/assets/data-dev/medicos';
import { Procedimiento } from '../models/Procedimiento';
import { map, catchError } from 'rxjs/operators';
import { ProcedimientosDataDev } from 'src/assets/data-dev/procedimientos';
import { ImagenesService } from './imagenes.service';
@Injectable({
  providedIn: 'root'
})
export class InformacionCentroMedicoService {
  eliminarEspecialidad(idEspecialidad:number) {
    return this.http.delete<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/especialidades/${idEspecialidad}`);
  }
  obtenerProcedimiento(idProcedimiento: number) :Observable<Procedimiento>{
    return of(ProcedimientosDataDev.listaProcedimientos[0]);
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}`).pipe(
    //   map(procedimientoJson => new Procedimiento().jsonToProcedimiento(procedimientoJson)),
    //   catchError(error => {
    //     console.error('Error al obtener procedimientos:', error);
    //     return of([]); 
    //   })
    // );
  }
  procedimientos:Procedimiento[]=ProcedimientosDataDev.listaProcedimientos.map(json=>new Procedimiento().jsonToProcedimiento(json));

  obtenerProcedimientos(): Observable<Procedimiento[]> {
    return of(this.procedimientos);
    return this.http.get<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos`).pipe(
      map(procedimientosJson => procedimientosJson.map(json => new Procedimiento().jsonToProcedimiento(json))),
      catchError(error => {
        console.error('Error al obtener procedimientos:', error);
        return of([]); 
      })
    );
  }
  modificarRequerimientoProcedimiento(idProcedimiento: number, idRequerimientoProcedimiento: number, formularioRequerimientoProcedimiento: FormGroup<any>) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}/requerimientos/${idRequerimientoProcedimiento}`,{
      "titulo":formularioRequerimientoProcedimiento.value.titulo,
      "descripcion":formularioRequerimientoProcedimiento.value.descripcion
    });
  }
  registrarRequerimientoProcedimien(idProcedimiento: number, formularioRequerimientoProcedimiento: FormGroup<any>) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}`,{
      "titulo":formularioRequerimientoProcedimiento.value.titulo,
      "descripcion":formularioRequerimientoProcedimiento.value.descripcion
    });
  }
  registrarPasoProcedimiento(idProcedimiento: number, formularioPasoProcedimiento: FormGroup<any>) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}`,{
      "titulo":formularioPasoProcedimiento.value.titulo,
      "descripcion":formularioPasoProcedimiento.value.descripcion
    });
  }
  modificarPasoProcedimiento(idProcedimiento: number, idPasoProcedimiento: number, formularioPasoProcedimiento: FormGroup<any>) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}/pasos/${idPasoProcedimiento}`,{
      "titulo":formularioPasoProcedimiento.value.titulo,
      "descripcion":formularioPasoProcedimiento.value.descripcion
    });
  }
  actualizarEspecialidad(idEspecialidad: number, formularioEspecialidad: FormGroup<any>,imagenes:string[]) {
    let formData = new FormData();
    const jsonData = {
      nombre: formularioEspecialidad.value.nombre,
      descripcion: formularioEspecialidad.value.descripcion
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/especialidades/${idEspecialidad}`,formData);
  }
  registrarEspecialidad(formularioEspecialidad: FormGroup<any>,imagenes: string[]) {
    let formData = new FormData();
    const jsonData = {
      nombre: formularioEspecialidad.value.nombre,
      descripcion: formularioEspecialidad.value.descripcion
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/especialidades`,formData);
  }
  listaMedicos=MedicosDataDev.medicos;
  obtenerInformacionCentroSalud() {
    return of({
      descripcionProcesoInscripcion:"",
      procedimientoProcesoInscripcion:[
        { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Presentarse en la recepción con documentos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
        { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de solicitud.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }

      ],
      requisitosProcesoInscripcion:[
        { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
        { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia médica completa.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }

      ]
    })
  }
  listaEspecialidades:Especialidad[]=EspecialidadesData.especialidadesDataDev.map(especialidad=>new Especialidad(especialidad));
  listaComunicados:Comunicado[]=ComunicadosDataDev.listaComunicados.map(comunicado=>new Comunicado().jsonToComunicado(comunicado))
  obtenerMedico(id:number):Observable<MedicoEspecialista> {
    return of(this.listaMedicos.filter(m=>m.id=id)[0]);
    // return of({
    //   id:1,
    //   nombres:"Juan Jose",
    //   apellidos:"Ibañez",
    //   descripcion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis. Morbi sit amet ligula consectetur, ultrices risus id, fermentum orci. Aenean feugiat interdum finibus. In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante. Duis hendrerit vel felis in elementum. Vivamus rutrum viverra metus cursus consequat. Morbi eget sodales leo, in pretium massa. Cras nec sagittis purus. Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque. Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis. Morbi lacinia quis nisi quis lacinia. Nullam eget turpis ligula. Fusce sit amet rhoncus est. Integer vulputate ornare tincidunt. Quisque eget ullamcorper quam. Cras nunc turpis, blandit et ante nec, tempus posuere orci.  Vivamus lobortis odio vitae posuere pellentesque. Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante. Praesent eget bibendum nunc. Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam. Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis. Mauris semper metus velit, interdum gravida nulla fermentum id. In sed arcu est. ",
    //   imagen:"fondo-opciones-menu.jpg"
    //});
  }
  obtenerComunicado(idComunicado:number):Observable<Comunicado>{
    return of(this.listaComunicados.filter(comunicado=>comunicado.idComunicado==idComunicado)[0]);
  }
  obtenerComunicados():Observable<Comunicado[]>{
    return of(this.listaComunicados);
  }
  obtenerNoticiasRecientes():Observable<Comunicado[]>{
    return of(this.listaComunicados);
  }
  registrarTurnoAtencion(formularioTurnoAtencionMedica:any) {
    let formularioTurnoAtencionMedicaAux=formularioTurnoAtencionMedica.value;
    // return this.http.post("http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica",{
    //   "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
    //   "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
    //   "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
    //   "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
    //   "fecha":formularioTurnoAtencionMedicaAux.fecha
    // });
    return this.http.post(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`,{
      "idConsultorio":formularioTurnoAtencionMedicaAux.idConsultorio,
      "idMedico":formularioTurnoAtencionMedicaAux.idMedico,
      "idTurno":formularioTurnoAtencionMedicaAux.idTurno,
      "numeroFichasDisponible":formularioTurnoAtencionMedicaAux.numeroFichasDisponible,
      "fecha":formularioTurnoAtencionMedicaAux.fecha
    });
  }
  obtenerTurnosAtencionMedica() {
    // return of([
    //   [
    //     1,
    //     "A12",
    //     "turno mañana",
    //     "medico1",
    //     "ginecologia"
    //   ],
    //   [
    //     2,
    //     "A15",
    //     "turno mañana",
    //     "medico3",
    //     "neurologia"
    //   ],
    //   [
    //     3,
    //     "B12",
    //     "turno tarde",
    //     "medico3",
    //     "traumatologia"
    //   ]
    // ]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/horarios-atencion-medica`);
  }
  obtenerConsultorios() {
    //return of([]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidades() {
    return of(this.listaEspecialidades);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidad(idEspecialidad: number):Observable<Especialidad> {
    let especialidadBuscada=this.listaEspecialidades.filter((e)=>e.idEspecialidad==idEspecialidad)[0]
    return of(especialidadBuscada);
  }
  obtenerTurnos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }
  obtenerMedicos() {
    return of(this.listaMedicos);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}
