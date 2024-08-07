import { Component } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidades';

@Component({
  selector: 'app-especialidades-atencion',
  templateUrl: './especialidades-atencion.component.html',
  styleUrls: ['./especialidades-atencion.component.css']
})
export class EspecialidadesAtencionComponent {
  listadoEspecialidades:Especialidad[]=[
    // {
    //   img:"pediatria.jpg",
    //   name:"Pediatria"
    // },
    {
      img:"doctor-home.png",
      name:"Ginecología"
    },
    {
      img:"fondo-opciones-menu.jpg",
      name:"Medicina general"
    },
    {
      img:"doctor-home.png",
      name:"Ginecología"
    },
    {
      img:"fondo-opciones-menu.jpg",
      name:"Medicina general"
    }
  ];
}
