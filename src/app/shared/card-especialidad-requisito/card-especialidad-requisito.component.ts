import { Component, Input } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';

@Component({
  selector: 'app-card-especialidad-requisito',
  templateUrl: './card-especialidad-requisito.component.html',
  styleUrls: ['./card-especialidad-requisito.component.css']
})
export class CardEspecialidadRequisitoComponent {
  @Input() especialidad!:Especialidad;
}
