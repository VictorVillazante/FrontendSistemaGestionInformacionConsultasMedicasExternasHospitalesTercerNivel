import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-formulario-detalle-consultorio',
  templateUrl: './formulario-detalle-consultorio.component.html',
  styleUrls: ['./formulario-detalle-consultorio.component.css']
})
export class FormularioDetalleConsultorioComponent {
  @Input() formularioConsultorio!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: Imagen[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService){}

}
