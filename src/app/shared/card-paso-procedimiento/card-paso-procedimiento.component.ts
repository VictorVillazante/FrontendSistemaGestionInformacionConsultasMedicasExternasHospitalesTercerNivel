import { Component, Input } from '@angular/core';
import { Paso } from 'src/app/models/Paso';

@Component({
  selector: 'app-card-paso-procedimiento',
  templateUrl: './card-paso-procedimiento.component.html',
  styleUrls: ['./card-paso-procedimiento.component.css']
})
export class CardPasoProcedimientoComponent {
  @Input()pasoProcedimiento!:Paso;

}
