import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foormulario-detalle-procedimiento',
  templateUrl: './foormulario-detalle-procedimiento.component.html',
  styleUrls: ['./foormulario-detalle-procedimiento.component.css']
})
export class FoormularioDetalleProcedimientoComponent {
  @Input() formularioProcedimiento!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: string[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
