import { Component, Input } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidades';

@Component({
  selector: 'app-card-especialidades',
  templateUrl: './card-especialidades.component.html',
  styleUrls: ['./card-especialidades.component.css']
})
export class CardEspecialidadesComponent {
  @Input() especialidad!:Especialidad;
}
