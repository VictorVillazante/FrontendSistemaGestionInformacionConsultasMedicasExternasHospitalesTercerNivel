import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-horarios-atencion',
  templateUrl: './tabla-horarios-atencion.component.html',
  styleUrls: ['./tabla-horarios-atencion.component.css']
})
export class TablaHorariosAtencionComponent {
  @Input() turnosAtencionMedica: any[] = [];


}
