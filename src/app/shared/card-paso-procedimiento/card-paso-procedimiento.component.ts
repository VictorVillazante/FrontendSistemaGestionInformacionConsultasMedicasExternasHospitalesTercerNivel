import { Component, Input } from '@angular/core';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';

@Component({
  selector: 'app-card-paso-procedimiento',
  templateUrl: './card-paso-procedimiento.component.html',
  styleUrls: ['./card-paso-procedimiento.component.css']
})
export class CardPasoProcedimientoComponent {
  @Input()pasoProcedimiento!:PasoProcedimiento;

}
