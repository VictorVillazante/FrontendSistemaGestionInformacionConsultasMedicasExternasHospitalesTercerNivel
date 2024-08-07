import { Component } from '@angular/core';
import { MedicoEspecialista } from 'src/app/models/MedicoEspecialista';

@Component({
  selector: 'app-carousel-medicos-especialistas',
  templateUrl: './carousel-medicos-especialistas.component.html',
  styleUrls: ['./carousel-medicos-especialistas.component.css']
})
export class CarouselMedicosEspecialistasComponent {
  listadoMedicosEspecialistas:MedicoEspecialista[]=[{
    nombres:"Juan Jose",
    apellidos:"Ibañez",
    descripcion:"descripcion",
    imagen:"fondo-opciones-menu.jpg"
  }];
}
