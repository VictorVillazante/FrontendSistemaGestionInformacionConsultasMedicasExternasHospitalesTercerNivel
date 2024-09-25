import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Especialidad } from 'src/app/models/Especialidad';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-formulario-detalle-consultorio',
  templateUrl: './formulario-detalle-consultorio.component.html',
  styleUrls: ['./formulario-detalle-consultorio.component.css']
})
export class FormularioDetalleConsultorioComponent {
  @Input() idConsultorio!:number;
  @Input() formularioConsultorio!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: Imagen[];
  @Output() imagenesEvent = new EventEmitter<any>();
  especialidades:Especialidad[]=[];
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService){}

  ngOnInit(): void {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe(e=>{
      this.especialidades = e;
    })
  }

}
