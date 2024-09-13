import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit{
  nombreUsuario: string = "";
  usuarios: Usuario[] = [];
  usuariosAux: Usuario[] = [];
  constructor(private alertasService:AlertasService,private router:Router,private usuariosService:UsuariosService) { }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuariosAux = usuarios;
    });
  }

  filtrarUsuarios() {
    let usuariosAuxAFiltrar=this.usuariosAux;
    if(this.nombreUsuario){
      usuariosAuxAFiltrar=usuariosAuxAFiltrar.filter((usuario:Usuario)=>{
        return this.quitarAcentos((usuario.nombres+" "+usuario.apellidoPaterno+" "+usuario.apellidoMaterno).toLowerCase()).includes(this.quitarAcentos(this.nombreUsuario.toLowerCase()));
      })      
    }
    if(!this.nombreUsuario){
      this.usuarios=this.usuariosAux;
    }
    this.usuarios=usuariosAuxAFiltrar;
  }
  redireccionarRegistroUsuario() {

  }
  redireccionarGestionRoles(arg0: any) {

  }

  eliminarUsuario(idUsuario: any) {
    this.alertasService.confirmarAccion('¿Deseas eliminar este usuario?').then((result) => {
      if(result){
        this.usuariosService.eliminarUsuario(idUsuario).subscribe(() => {
          this.obtenerUsuarios();
          this.alertasService.mensajeConfirmacion();
        }, (error) => this.alertasService.mensajeError());
      }
    })

  }
  redireccionarVerDetalleUsuario(arg0: any) {
  }
  redireccionarActualizarUsuario(arg0: any) {
  }
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
