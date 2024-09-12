import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elementos-listado',
  templateUrl: './elementos-listado.component.html',
  styleUrls: ['./elementos-listado.component.css']
})
export class ElementosListadoComponent {
  @Input() i!:number;
}
