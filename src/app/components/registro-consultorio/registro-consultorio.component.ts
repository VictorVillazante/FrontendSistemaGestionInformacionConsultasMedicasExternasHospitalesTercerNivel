import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-registro-consultorio',
  templateUrl: './registro-consultorio.component.html',
  styleUrls: ['./registro-consultorio.component.css']
})
export class RegistroConsultorioComponent {
  formularioConsultorio: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private activatedRoute:ActivatedRoute,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService,private alertasService:AlertasService) {
    this.formularioConsultorio = this.fb.group({
      nombre: ["",Validators.required],
      direccion: ["",Validators.required],
      equipamiento: [""],
      idEspecialidad: [0,Validators.required],
      nombreEspecialidad: [""],
      codigoConsultorio: ["",Validators.required],
      descripcion: ["",Validators.required],
      numeroTelefono: [ "",Validators.required],
      capacidad: [0,[Validators.required, Validators.min(1)]],
    });
  }


  onSubmit(): void {
    console.log(this.formularioConsultorio.value);
    if (this.formularioConsultorio.valid) {
      this.informacionCentroMedicoService.registrarConsultorio(this.formularioConsultorio,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>{
        this.alertasService.mensajeError();
      })
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
