import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frmulario-comunicado',
  templateUrl: './frmulario-comunicado.component.html',
  styleUrls: ['./frmulario-comunicado.component.css']
})
export class FrmularioComunicadoComponent {
  @Input() formularioComunicado!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: string[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
