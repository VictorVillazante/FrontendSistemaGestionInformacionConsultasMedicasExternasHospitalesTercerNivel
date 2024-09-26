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
import { ProcedimientoElemento } from '../models/ProcedimientoElemento';
import { map, catchError } from 'rxjs/operators';
import { ProcedimientosElementosDataDev } from 'src/assets/data-dev/procedimientos-elementos';
import { ImagenesService } from './imagenes.service';
import { Consultorio } from '../models/Consultorio';
import { ConsultoriosDataDev } from 'src/assets/data-dev/consultorios';
import { Imagen } from '../models/Imagen';
import { ProcedimientosDataDev } from 'src/assets/data-dev/procedimientos';
import { Procedimiento } from '../models/Procedimieto';
import { formatDate } from '@angular/common';
import { PasosDataDev } from 'src/assets/data-dev/pasos';
import { Paso } from '../models/Paso';
import { RequisitosDataDev } from 'src/assets/data-dev/requisitos';
import { Requisito } from '../models/Requisito';
@Injectable({
  providedIn: 'root'
})
export class InformacionCentroMedicoService {
  requisitos:any[]=RequisitosDataDev.listaRequisitos;
  registrarRequisito(formularioRequisito: FormGroup<any>, imagenes: Imagen[]) {
     let formData=new FormData();
    const jsonData = {
      titulo:formularioRequisito.value.titulo,
      descripcion:formularioRequisito.value.descripcion
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);

    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/requisitos`,formData);

  }
  eliminarRequisito(idRequisito: number) {
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/requisitos/${idRequisito}`);

  }
  obtenerRequisitos() {
    return of(this.requisitos).pipe(
      map(requisitosJson => requisitosJson.map(json => new Requisito().jsonToRequisito(json))),
      catchError(error => {
        console.error('Error al obtener requisitos:', error);
        return of([]); 
      })
    );
    // return this.http.get<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/pasos`).pipe(
    //   map(requisitosJson => requisitosJson.map(json => new Requisito().jsonToRequisito(json))),
    //   catchError(error => {
    //     console.error('Error al obtener requisitos:', error);
    //     return of([]); 
    //   })
    // );
  }
  modificarRequisito(idRequisito: number, formularioRequisito: FormGroup<any>, imagenes: Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      titulo:formularioRequisito.value.titulo,
      descripcion:formularioRequisito.value.descripcion
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);

    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/requisitos/${idRequisito}`,formData);
  }
  modificarPaso(idPaso: number, formularioPaso: FormGroup<any>, imagenes: Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      nombre:formularioPaso.value.nombre,
      descripcion:formularioPaso.value.descripcion
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);

    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/pasos/${idPaso}`,formData);

  }
  eliminarPaso(idPaso: number) {
    return this.http.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/pasos/${idPaso}`);
  }
  registrarPaso(idPaso: number, formularioPaso: FormGroup<any>, imagenes: Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      nombre:formularioPaso.value.nombre,
      descripcion:formularioPaso.value.descripcion
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);

    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/pasos`,formData);
  }

  pasos:any[]=PasosDataDev.listaPasos;
  obtenerPasos():Observable<Paso[]> {
    return of(this.procedimientos).pipe(
      map(pasosJson => pasosJson.map(json => new Paso().jsonToPaso(json))),
      catchError(error => {
        console.error('Error al obtener procedimientos:', error);
        return of([]); 
      })
    );
    // return this.http.get<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/pasos`).pipe(
    //   map(procedimientosJson => procedimientosJson.map((json:any) => new Paso().jsonToPaso(json))),
    //   catchError(error => {
    //     console.error('Error al obtener procedimientos:', error);
    //     return of([]); 
    //   })
    // );
  }

  eliminarConsultorio(idConsultorio: any) {
    return this.http.delete<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios/${idConsultorio}`);
  }
  eliminarComunicado(idComunicado: any) {
    return this.http.delete<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/comunicados/${idComunicado}`);
  }
  eliminarEspecialidad(idEspecialidad:number) {
    return this.http.delete<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades/${idEspecialidad}`);
  }

  obtenerRequisitosProcedimientoElemento(idProcedimiento: number,idElemento:number,tipo:string){
    return of(ProcedimientosElementosDataDev.listaProcedimientosElementos[0].requisitos);
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}/elementos/${idElemento}/tipo-elemento/${tipo}/requisitos`).pipe(
    //   map(requisitosJson => requisitosJson.map((requisitoJson:any)=>new Requisito().jsonToRequisito(requisitoJson))),
    //   catchError(error => {
    //     console.error('Error al obtener requisitos:', error);
    //     return of([]); 
    //   })
    // );
  }
  obtenerPasosProcedimientoElemento(idProcedimiento: number,idElemento:number,tipo:string){
    return of(ProcedimientosElementosDataDev.listaProcedimientosElementos[0].pasos);
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}/elementos/${idElemento}/tipo-elemento/${tipo}/pasos`).pipe(
    //   map(pasosJson => pasosJson.map((pasoJson:any)=>new Paso().jsonToPaso(pasoJson))),
    //   catchError(error => {
    //     console.error('Error al obtener pasos:', error);
    //     return of([]); 
    //   })
    // );
  }
  obtenerProcedimiento(idProcedimiento: number) :Observable<Procedimiento>{
    return of(ProcedimientosDataDev.listaProcedimientosElementos[0]).pipe(
        map(procedimientoJson => new Procedimiento().jsonToProcedimiento(procedimientoJson)),
        catchError(error => {
          console.error('Error al obtener procedimientos:', error);
          return of(new Procedimiento()); 
        })
      );
  
     // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}`).pipe(
    //   map(procedimientoJson => new Procedimiento().jsonToProcedimiento(procedimientoJson)),
    //   catchError(error => {
    //     console.error('Error al obtener procedimientos:', error);
    //     return of(new Procedimiento()); 
    //   })
    // );

  }
  obtenerProcedimientoElemento(idProcedimiento: number) :Observable<ProcedimientoElemento>{
    return of(ProcedimientosElementosDataDev.listaProcedimientosElementos[0])
    // return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/procedimientos/${idProcedimiento}`).pipe(
    //   map(procedimientoJson => new Procedimiento().jsonToProcedimiento(procedimientoJson)),
    //   catchError(error => {
    //     console.error('Error al obtener procedimientos:', error);
    //     return of(new Procedimiento()); 
    //   })
    // );
  }
  procedimientos:ProcedimientoElemento[]=ProcedimientosElementosDataDev.listaProcedimientosElementos.map(json=>new ProcedimientoElemento().jsonToProcedimientoElemento(json));

  obtenerProcedimientos(): Observable<ProcedimientoElemento[]> {
    return of(this.procedimientos);
    return this.http.get<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos`).pipe(
      map(procedimientosJson => procedimientosJson.map(json => new ProcedimientoElemento().jsonToProcedimientoElemento(json))),
      catchError(error => {
        console.error('Error al obtener procedimientos:', error);
        return of([]); 
      })
    );
  }
  modificarRequerimientoProcedimiento(idProcedimiento: number, idRequerimientoProcedimiento: number, formularioRequerimientoProcedimiento: FormGroup<any>) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}/requerimientos/${idRequerimientoProcedimiento}`,{
      "titulo":formularioRequerimientoProcedimiento.value.titulo,
      "descripcion":formularioRequerimientoProcedimiento.value.descripcion
    });
  }
  registrarRequerimientoProcedimien(idProcedimiento: number, formularioRequerimientoProcedimiento: FormGroup<any>) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}`,{
      "titulo":formularioRequerimientoProcedimiento.value.titulo,
      "descripcion":formularioRequerimientoProcedimiento.value.descripcion
    });
  }
  registrarPasoProcedimiento(idProcedimiento: number, formularioPasoProcedimiento: FormGroup<any>) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}`,{
      "titulo":formularioPasoProcedimiento.value.titulo,
      "descripcion":formularioPasoProcedimiento.value.descripcion
    });
  }
  modificarPasoProcedimiento(idProcedimiento: number, idPasoProcedimiento: number, formularioPasoProcedimiento: FormGroup<any>) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}/pasos/${idPasoProcedimiento}`,{
      "titulo":formularioPasoProcedimiento.value.titulo,
      "descripcion":formularioPasoProcedimiento.value.descripcion
    });
  }
  actualizarProcedimientoElementoAdmision(formularioProcedimiento: FormGroup<any>, imagenes:Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      "titulo": formularioProcedimiento.value.titulo,
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${apiUrlEnviroment.procedimientoAdmsion}`,formData)
  }
  actualizarProcedimiento(idProcedimiento: number, formularioProcedimiento: FormGroup<any>) {
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos/${idProcedimiento}`,{
      "titulo": formularioProcedimiento.value.titulo,
      "descripcion": formularioProcedimiento.value.descripcion
    })
  }
  registrarProcedimiento(formularioProcedimiento: FormGroup<any>) {
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/procedimientos`,{
      "titulo": formularioProcedimiento.value.titulo,
      "descripcion": formularioProcedimiento.value.descripcion  
    })
  }
  actualizarComunicado(idComunicado: number, formularioComunicado: FormGroup<any>,imagenes:Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      "titulo":formularioComunicado.value.titulo,
      "lugar":formularioComunicado.value.lugar,
      "introduccion":formularioComunicado.value.introduccion,
      "cuerpo":formularioComunicado.value.cuerpo,
      "citas":formularioComunicado.value.citas,
      "datosContacto":formularioComunicado.value.datosContacto
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);

    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/comunicados/${idComunicado}`,formData);
  }
  registrarComunicado(formularioComunicado: FormGroup<any>,imagenes:Imagen[]) {
    let formData=new FormData();
    const jsonData = {
      "titulo":formularioComunicado.value.titulo,
      "lugar":formularioComunicado.value.lugar,
      "introduccion":formularioComunicado.value.introduccion,
      "cuerpo":formularioComunicado.value.cuerpo,
      "citas":formularioComunicado.value.citas,
      "datosContacto":formularioComunicado.value.datosContacto
    }
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/comunicados`,formData);
  }
  registrarConsultorio(formularioConsultorio: FormGroup<any>,imagenes:Imagen[]) {
    let formData = new FormData();
    const jsonData = {
      nombre: formularioConsultorio.value.nombre,
      direccion: formularioConsultorio.value.direccion,
      equipamiento: formularioConsultorio.value.equipamiento,
      idEspecialidad: parseInt(formularioConsultorio.value.idEspecialidad),
      nombreEspecialidad: formularioConsultorio.value.nombreEspecialidad,
      codigoConsultorio: formularioConsultorio.value.codigoConsultorio,
      descripcion: formularioConsultorio.value.descripcion,
      numeroTelefono: formularioConsultorio.value.numeroTelefono,
      capacidad: formularioConsultorio.value.capacidad,
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios`,formData);
  }
  actualizarConsultorio(idConsultorio:number,formularioConsultorio: FormGroup<any>,imagenes:Imagen[]){
    let formData = new FormData();
    const jsonData = {
      nombre: formularioConsultorio.value.nombre,
      direccion: formularioConsultorio.value.direccion,
      equipamiento: formularioConsultorio.value.equipamiento,
      idEspecialidad: parseInt(formularioConsultorio.value.idEspecialidad),
      nombreEspecialidad: formularioConsultorio.value.nombreEspecialidad,
      codigoConsultorio: formularioConsultorio.value.codigoConsultorio,
      descripcion: formularioConsultorio.value.descripcion,
      numeroTelefono: formularioConsultorio.value.numeroTelefono,
      capacidad: formularioConsultorio.value.capacidad,
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/consultorios/${idConsultorio}`,formData);

  }
  actualizarEspecialidad(idEspecialidad: number, formularioEspecialidad: FormGroup<any>,imagenes:Imagen[]) {
    let formData = new FormData();
    const jsonData = {
      nombre: formularioEspecialidad.value.nombre,
      descripcion: formularioEspecialidad.value.descripcion
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades/${idEspecialidad}`,formData);
  }
  registrarEspecialidad(formularioEspecialidad: FormGroup<any>,imagenes: Imagen[]) {
    let formData = new FormData();
    const jsonData = {
      nombre: formularioEspecialidad.value.nombre,
      descripcion: formularioEspecialidad.value.descripcion
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.http.post<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades`,formData);
  }
  listaMedicos=MedicosDataDev.medicos;
  obtenerProcesoInscripcionCentroSalud() {
    return of(new ProcedimientoElemento().jsonToProcedimientoElemento(this.procedimientos[0]));
  }
  listaEspecialidades:any[]=EspecialidadesData.especialidadesDataDev;
  listaComunicados:any[]=ComunicadosDataDev.listaComunicados;
  listaConsultorios:any[]=ConsultoriosDataDev.listaConsultorios;

  obtenerMedico(id:number):Observable<MedicoEspecialista> {
    return of(this.listaMedicos[0]).pipe(
      map(medicoJson => new MedicoEspecialista().jsonToMedicoEspecialista(medicoJson)),
      catchError(error => {
        console.error('Error al obtener medico:', error);
        return of(new MedicoEspecialista()); 
      })
    );
    // return of({
    //   id:1,
    //   nombres:"Juan Jose",
    //   apellidos:"Ibañez",
    //   descripcion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sapien eu est lobortis, sit amet aliquam diam iaculis. Nulla pulvinar lacus mauris, in convallis odio elementum eu. Duis a dolor feugiat, accumsan libero a, volutpat risus. Cras at pretium ante. Nullam condimentum purus tortor, nec sagittis ipsum mattis a. Nam molestie mollis mauris, ut convallis diam molestie eget. Nulla eu diam at felis porttitor dapibus. Nam luctus augue ut nisl euismod, eu suscipit velit gravida. Integer fermentum mi quis quam consectetur ultrices. Nullam in mauris a augue tempus commodo ut ac neque. Pellentesque in arcu purus. Sed eu sem turpis. Morbi sit amet ligula consectetur, ultrices risus id, fermentum orci. Aenean feugiat interdum finibus. In lectus nibh, sodales vitae velit eu, tincidunt sagittis ante. Duis hendrerit vel felis in elementum. Vivamus rutrum viverra metus cursus consequat. Morbi eget sodales leo, in pretium massa. Cras nec sagittis purus. Aenean semper, augue vitae vehicula vestibulum, lacus mi laoreet erat, non tincidunt ligula elit pharetra neque. Praesent sit amet felis pharetra, ultrices tortor at, laoreet felis. Morbi lacinia quis nisi quis lacinia. Nullam eget turpis ligula. Fusce sit amet rhoncus est. Integer vulputate ornare tincidunt. Quisque eget ullamcorper quam. Cras nunc turpis, blandit et ante nec, tempus posuere orci.  Vivamus lobortis odio vitae posuere pellentesque. Vestibulum nisi arcu, feugiat sed tristique vitae, fringilla id ante. Praesent eget bibendum nunc. Fusce dictum, nisi non suscipit blandit, arcu lorem tincidunt nunc, in bibendum enim nunc nec diam. Nulla orci lectus, feugiat vel imperdiet in, vulputate et turpis. Mauris semper metus velit, interdum gravida nulla fermentum id. In sed arcu est. ",
    //   imagen:"fondo-opciones-menu.jpg"
    //});
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/medicos/${id}`);
  }
  obtenerComunicado(idComunicado:number):Observable<Comunicado>{
    return of(this.listaComunicados.filter(comunicado=>comunicado.idComunicado==idComunicado)[0]);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/comunicados/${idComunicado}`).pipe(
      map(comunicadoJson => new Comunicado().jsonToComunicado(comunicadoJson)),
      catchError(error => {
        console.error('Error al obtener procedimientos:', error);
        return of(new Comunicado()); 
      })
    );
  }
  obtenerComunicados():Observable<Comunicado[]>{
    return of(this.listaComunicados).pipe(
      map(comunicadosJson => comunicadosJson.map((comunicadoJson:any)=>new Comunicado().jsonToComunicado(comunicadoJson))),
      catchError(error => {
        console.error('Error al obtener comunicados:', error);
        return of([]); 
      })
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/comunicados`).pipe(
      map(comunicadosJson => comunicadosJson.map((comunicadoJson:any)=>new Comunicado().jsonToComunicado(comunicadoJson))),
      catchError(error => {
        console.error('Error al obtener procedimientos:', error);
        return of([]); 
      })
    );
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
  obtenerConsultorio(idConsultorio: number) {
    return of(this.listaConsultorios[0]).pipe(
      map((consultorioJson:any)=>new Consultorio().jsonToConsultorio(consultorioJson)),
      catchError(error => {
        console.error('Error al obtener consultorio:', error);
        return of(new Consultorio()); 
      })
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/consultorios`).pipe(
      map((consultorioJson:any)=>new Consultorio().jsonToConsultorio(consultorioJson)),
      catchError(error => {
        console.error('Error al obtener consultorio:', error);
        return of(new Consultorio()); 
      })
    );    
  }
  obtenerConsultorios() {
    return of(this.listaConsultorios).pipe(
      map(consultoriosJson => consultoriosJson.map((consultorioJson:any)=>new Consultorio().jsonToConsultorio(consultorioJson))),
      catchError(error => {
        console.error('Error al obtener consultorios:', error);
        return of([]); 
      })
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/v1.0/consultorios`).pipe(
      map(consultoriosJson => consultoriosJson.map((consultorioJson:any)=>new Consultorio().jsonToConsultorio(consultorioJson))),
      catchError(error => {
        console.error('Error al obtener consultorios:', error);
        return of([]); 
      })
    );
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/consultorios`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidades() : Observable<Especialidad[]> {
    //return of<Especialidad[]>(this.listaEspecialidades.map((e)=>new Especialidad().jsonToEspecialidad(e)));
    return of(this.listaEspecialidades).pipe(
      map(especialidadesJson => especialidadesJson.map((especialidadJson:any)=>new Especialidad().jsonToEspecialidad(especialidadJson))),
      catchError(error => {
        console.error('Error al obtener especialidades:', error);
        return of([]); 
      })
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/especialidades`);
    //throw new Error('Method not implemented.');
  }
  obtenerEspecialidad(idEspecialidad: number):Observable<Especialidad> {
    let especialidadBuscada=this.listaEspecialidades.filter((e)=>e.idEspecialidad==idEspecialidad)[0]
    return of(especialidadBuscada);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/especialidades/${idEspecialidad}`);

  }
  obtenerTurnos() {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/turnos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }
  obtenerMedicos() {
    return of(this.listaMedicos).pipe(
      map(medicosJson => medicosJson.map((medicoJson:any)=>new MedicoEspecialista().jsonToMedicoEspecialista(medicoJson))),
      catchError(error => {
        console.error('Error al obtener medicos:', error);
        return of([]); 
      })
    );
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/medicos`);
    // return this.http.get<any>(`http://localhost:8088/api/microservicio-gestion-informacion-centro-medico/medicos`);
    // return of([]);
    // throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}
