import { Component, Input } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';

@Component({
  selector: 'app-card-especialidad-procedimiento',
  templateUrl: './card-especialidad-procedimiento.component.html',
  styleUrls: ['./card-especialidad-procedimiento.component.css']
})
export class CardEspecialidadProcedimientoComponent {
  @Input() especialidad!:Especialidad;
}
