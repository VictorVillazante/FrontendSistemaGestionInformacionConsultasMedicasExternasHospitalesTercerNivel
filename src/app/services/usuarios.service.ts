import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { Usuario } from '../models/Usuario';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuariosDataDev } from 'src/assets/data-dev/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
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
  actualizarUsuario(formularioUsuario: FormGroup<any>) {
    return this.httpClient.put<any>("",{
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
    })
  }
  obtenerUsuario(id: any) {
    return this.httpClient.get<any>("");
  }
  registrarUsuario(formularioUsuario: FormGroup<any>) {
    return this.httpClient.post<any>("",{
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
    });
  }

  constructor(private httpClient:HttpClient) { }
}
