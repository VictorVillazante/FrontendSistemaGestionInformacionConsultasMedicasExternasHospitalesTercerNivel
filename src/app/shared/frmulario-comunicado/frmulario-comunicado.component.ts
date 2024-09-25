import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-frmulario-comunicado',
  templateUrl: './frmulario-comunicado.component.html',
  styleUrls: ['./frmulario-comunicado.component.css']
})
export class FrmularioComunicadoComponent {
  @Input() idComunicado!:number;
  @Input() formularioComunicado!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: Imagen[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
  constructor(private alertasService:AlertasService,private informacionCentroMedicoService:InformacionCentroMedicoService){};

}
