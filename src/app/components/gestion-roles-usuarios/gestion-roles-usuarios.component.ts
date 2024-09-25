import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/Rol';
import { RolUsuario } from 'src/app/models/RolUsuario';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestion-roles-usuarios',
  templateUrl: './gestion-roles-usuarios.component.html',
  styleUrls: ['./gestion-roles-usuarios.component.css']
})
export class GestionRolesUsuariosComponent {
  registrarRolUsuario(rol: Rol) {
    // TODO: utilizar id del token
    const idUsuario=1;
    this.alertasService.confirmarAccion("Estas seguro de registrar rol?").then((result) => {
      if (result) {
        this.usuariosService.registrarRolUsuario(idUsuario,rol.idRol).subscribe(() => {
          this.obtenerRolesUsuario();
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
   
  }
  eliminarRolUsuario(rolUsuario: RolUsuario) {
    this.alertasService.confirmarAccion("Estas seguro de eliminar rol?").then((result) => {
      if (result) {
        this.usuariosService.eliminarRolUsuario(rolUsuario.idUsuario,rolUsuario.idRol).subscribe(() => {
          this.obtenerRolesUsuario();
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
  }
  roles:Rol[]=[];
  rolesUsuario:RolUsuario[]=[];


  constructor(private alertasService:AlertasService,private router:Router,private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerRoles();
    this.obtenerRolesUsuario();
  }
  obtenerRoles() {
    this.usuariosService.obtenerRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  obtenerRolesUsuario() {
    // TODO: utilizar id del token
    const idUsuario=1;
    this.usuariosService.obtenerRolesUsuario(idUsuario).subscribe((rolesUsuario) => {
      this.rolesUsuario = rolesUsuario;
    });
    
  }
}
