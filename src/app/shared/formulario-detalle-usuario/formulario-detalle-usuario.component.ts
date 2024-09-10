import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-detalle-usuario',
  templateUrl: './formulario-detalle-usuario.component.html',
  styleUrls: ['./formulario-detalle-usuario.component.css']
})
export class FormularioDetalleUsuarioComponent {
  @Input() formularioUsuario!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: string[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
