import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Component({
  selector: 'app-actualizacion-procedimiento-admision',
  templateUrl: './actualizacion-procedimiento-admision.component.html',
  styleUrls: ['./actualizacion-procedimiento-admision.component.css']
})
export class ActualizacionProcedimientoAdmisionComponent {
  formularioProcedimiento: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioProcedimiento = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { 
    this.obtenerProcedimiento(apiUrlEnviroment.procedimientoAdmsion);
  }
  obtenerProcedimiento(idProcedimiento: any) {
    this.informacionCentroMedicoService.obtenerProcedimiento(idProcedimiento).subscribe((procedimiento:any)=>{
      this.formularioProcedimiento.patchValue(procedimiento);
    })
  }
  onSubmit(): void {
    if (this.formularioProcedimiento.valid) {
      this.informacionCentroMedicoService.actualizarProcedimientoElementoAdmision(this.formularioProcedimiento,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
