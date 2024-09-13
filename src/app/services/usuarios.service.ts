import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Usuario } from '../models/Usuario';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuariosDataDev } from 'src/assets/data-dev/usuarios';
import { ImagenesService } from './imagenes.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  restaurarUsuario(idUsuario: number) {
    return this.httpClient.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios/${idUsuario}/restaurar`,{});
  }
  eliminarUsuario(idUsuario: any) {
    return this.httpClient.delete<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios/${idUsuario}`);
  }
  usuarios:Usuario[]=UsuariosDataDev.listaUsuarios.map(json=>new Usuario().jsonToUsuario(json));

  obtenerUsuarios(): Observable<Usuario[]>{
    return of(this.usuarios);
    return this.httpClient.get<any[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios`).pipe(
      map(usuariosJson => usuariosJson.map(json => new Usuario().jsonToUsuario(json))),
      catchError(error => {
        console.error('Error al obtener usuarios:', error);
        return of([]); 
      })
    );
  }
  actualizarUsuario(formularioUsuario: FormGroup<any>,imagenes:string[],idUsuario:number) {
    let formData=new FormData();
    const jsonData = {
      nombres: formularioUsuario.value.nombres,
      ci: formularioUsuario.value.ci,
      direccion: formularioUsuario.value.direccion,
      celular: formularioUsuario.value.celular,
      email: formularioUsuario.value.email,
      grupo_sanguineo: formularioUsuario.value.grupo_sanguineo,
      apellido_paterno: formularioUsuario.value.apellido_paterno,
      apellido_materno: formularioUsuario.value.apellido_materno,
      fecha_nacimiento: formularioUsuario.value.fecha_nacimiento,
      sexo: formularioUsuario.value.sexo,
      estado_civil: formularioUsuario.value.estado_civil,
      edad: formularioUsuario.value.edad,
      dias_sancion_peticion_ficha_presencial: formularioUsuario.value.dias_sancion_peticion_ficha_presencial,
      telefono: formularioUsuario.value.telefono
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.httpClient.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios/${idUsuario}`,formData)
  }
  obtenerUsuario(id: any) : Observable<Usuario>{
    return of(this.usuarios[0]);
    return this.httpClient.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios/${id}`).pipe(
      map(usuarioJson => new Usuario().jsonToUsuario(usuarioJson)),
      catchError(error => {
        console.error('Error al obtener usuarios:', error);
        return of(new Usuario()); 
      })
    );
  }
  registrarUsuario(formularioUsuario: FormGroup<any>,imagenes:string[]) {
    let formData=new FormData();
    const jsonData = {
      nombres: formularioUsuario.value.nombres,
      ci: formularioUsuario.value.ci,
      direccion: formularioUsuario.value.direccion,
      celular: formularioUsuario.value.celular,
      email: formularioUsuario.value.email,
      grupo_sanguineo: formularioUsuario.value.grupo_sanguineo,
      apellido_paterno: formularioUsuario.value.apellido_paterno,
      apellido_materno: formularioUsuario.value.apellido_materno,
      fecha_nacimiento: formularioUsuario.value.fecha_nacimiento,
      sexo: formularioUsuario.value.sexo,
      estado_civil: formularioUsuario.value.estado_civil,
      edad: formularioUsuario.value.edad,
      dias_sancion_peticion_ficha_presencial: formularioUsuario.value.dias_sancion_peticion_ficha_presencial,
      telefono: formularioUsuario.value.telefono
    };
    const jsonString = JSON.stringify(jsonData);
    formData.append('data', jsonString);
    formData = ImagenesService.agregarImagenesAFormData(formData, imagenes);
    console.log(formData);
    return this.httpClient.post<any>("${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/usuarios",formData);
  }

  constructor(private httpClient:HttpClient) { }
}
