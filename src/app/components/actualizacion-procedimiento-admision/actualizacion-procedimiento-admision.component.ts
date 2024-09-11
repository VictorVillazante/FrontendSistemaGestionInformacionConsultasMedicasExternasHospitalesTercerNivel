import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-actualizacion-procedimiento-admision',
  templateUrl: './actualizacion-procedimiento-admision.component.html',
  styleUrls: ['./actualizacion-procedimiento-admision.component.css']
})
export class ActualizacionProcedimientoAdmisionComponent {
  formularioProcedimiento: FormGroup;
  imagenes: string[] = [];
  constructor(private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioProcedimiento = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.formularioProcedimiento.valid) {
      this.informacionCentroMedicoService.actualizarProcedimientoAdmision(this.formularioProcedimiento).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
