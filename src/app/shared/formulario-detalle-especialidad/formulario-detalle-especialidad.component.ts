import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-formulario-detalle-especialidad',
  templateUrl: './formulario-detalle-especialidad.component.html',
  styleUrls: ['./formulario-detalle-especialidad.component.css']
})
export class FormularioDetalleEspecialidadComponent {
  @Input() formularioEspecialidad!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: string[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService){}
}
