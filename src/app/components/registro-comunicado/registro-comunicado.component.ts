import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-registro-comunicado',
  templateUrl: './registro-comunicado.component.html',
  styleUrls: ['./registro-comunicado.component.css']
})
export class RegistroComunicadoComponent {
  formularioComunicado: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioComunicado = this.fb.group({
      titulo: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      introduccion: ['', [Validators.required]],
      cuerpo: ['', [Validators.required]],
      citas: [''],
      datosContacto: ['']
    });
  }

  onSubmit(): void {
    if (this.formularioComunicado.valid) {
      this.informacionCentroMedicoService.registrarComunicado(this.formularioComunicado,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
