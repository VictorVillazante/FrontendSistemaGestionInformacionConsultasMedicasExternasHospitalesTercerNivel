import { Component, Input } from '@angular/core';
import { Requisito } from 'src/app/models/Requisito';

@Component({
  selector: 'app-card-requisito-procedimiento',
  templateUrl: './card-requisito-procedimiento.component.html',
  styleUrls: ['./card-requisito-procedimiento.component.css']
})
export class CardRequisitoProcedimientoComponent {
  @Input()requisito!:Requisito;
}
