import { Component } from '@angular/core';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';

@Component({
  selector: 'app-usuario-no-logeado-proceso-inscripcion',
  templateUrl: './usuario-no-logeado-proceso-inscripcion.component.html',
  styleUrls: ['./usuario-no-logeado-proceso-inscripcion.component.css']
})
export class UsuarioNoLogeadoProcesoInscripcionComponent {
  listadoProcedimientoPasos:PasoProcedimiento[]=[
    {
      nombre:"Requisito 1",
      descripcion:"Descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombre:"Requisito 1",
      descripcion:"Descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombre:"Requisito 1",
      descripcion:"Descripcion",
      imagen:"fondo-opciones-menu.jpg"
    }
  ];
}
