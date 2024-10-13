import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  idUsuario!:number;
  registrarRolUsuario(rol: Rol) {
    this.alertasService.confirmarAccion("Estas seguro de registrar rol?").then((result) => {
      if (result) {
        this.usuariosService.registrarRolUsuario(this.idUsuario,rol.idRol).subscribe(() => {
          this.obtenerRolesUsuario();
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
   
  }
  eliminarRolUsuario(rolUsuario: Rol) {
    this.alertasService.confirmarAccion("Estas seguro de eliminar rol?").then((result) => {
      if (result) {
        this.usuariosService.eliminarRolUsuario(this.idUsuario,rolUsuario.idRol).subscribe(() => {
          this.obtenerRolesUsuario();
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
  }
  roles:Rol[]=[];
  rolesUsuario:Rol[]=[];


  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private router:Router,private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
    })
    this.obtenerRoles();
    this.obtenerRolesUsuario();
  }
  obtenerRoles() {
    this.usuariosService.obtenerRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  obtenerRolesUsuario() {
    this.usuariosService.obtenerRolesUsuario(this.idUsuario).subscribe((rolesUsuario) => {
      this.rolesUsuario = rolesUsuario;
    });
    
  }
}
