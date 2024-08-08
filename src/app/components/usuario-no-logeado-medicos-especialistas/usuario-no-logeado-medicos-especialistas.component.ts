import { Component } from '@angular/core';
import { MedicoEspecialista } from 'src/app/models/MedicoEspecialista';

@Component({
  selector: 'app-usuario-no-logeado-medicos-especialistas',
  templateUrl: './usuario-no-logeado-medicos-especialistas.component.html',
  styleUrls: ['./usuario-no-logeado-medicos-especialistas.component.css']
})
export class UsuarioNoLogeadoMedicosEspecialistasComponent {
  listadoMedicosEspecialistas:MedicoEspecialista[]=[
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    },
    {
      nombres:"Juan Jose",
      apellidos:"Ibañez",
      descripcion:"descripcion",
      imagen:"fondo-opciones-menu.jpg"
    }
  ];
}
