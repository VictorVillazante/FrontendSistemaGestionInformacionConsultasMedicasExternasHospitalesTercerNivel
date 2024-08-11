import { AfterViewInit, Component } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidades';
import { ScriptsService } from 'src/app/services/scripts.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-especialidades-atencion',
  templateUrl: './especialidades-atencion.component.html',
  styleUrls: ['./especialidades-atencion.component.css']
})
export class EspecialidadesAtencionComponent implements AfterViewInit{
  id: string = uuidv4().replace(/-/g, '');
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
    },
    {
      img:"fondo-opciones-menu.jpg",
      name:"Medicina general"
    },
    {
      img:"fondo-opciones-menu.jpg",
      name:"Medicina general"
    },
    {
      img:"fondo-opciones-menu.jpg",
      name:"Medicina general"
    }
  ];
  constructor(private scriptsService:ScriptsService){
  }
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
}
