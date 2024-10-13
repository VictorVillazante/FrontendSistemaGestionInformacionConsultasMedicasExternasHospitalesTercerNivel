import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/Rol';
import { RolUsuario } from 'src/app/models/RolUsuario';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent {
  registrarRolUsuario(rol: Rol) {
      // TODO: utilizar id del token
    const idUsuario=1;
    this.usuariosService.registrarRolUsuario(idUsuario,rol.idRol).subscribe(() => {
      this.obtenerRoles();
    });
  }
  eliminarRolUsuario(rolUsuario: RolUsuario) {
    this.usuariosService.eliminarRolUsuario(rolUsuario.idUsuario,rolUsuario.idRol).subscribe(() => {
      this.obtenerRoles();
    });
  }
  roles:Rol[]=[];
  rolesUsuario:RolUsuario[]=[];


  constructor(private alertasService:AlertasService,private router:Router,private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerRoles();
  }
  obtenerRoles() {
    this.usuariosService.obtenerRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

}
