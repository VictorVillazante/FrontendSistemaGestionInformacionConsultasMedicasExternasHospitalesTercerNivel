import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { Procedimiento } from 'src/app/models/Procedimieto';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Component({
  selector: 'app-actualizacion-procedimiento-admision',
  templateUrl: './actualizacion-procedimiento-admision.component.html',
  styleUrls: ['./actualizacion-procedimiento-admision.component.css']
})
export class ActualizacionProcedimientoAdmisionComponent {
  obtenerRutaPasosProcedimientoAdmisionElemento(): string {
    return `administracion/gestion-procedimientos-elementos-pasos/procedimientos/${apiUrlEnviroment.idProcedimientoAdmsion}/centro-salud/1`;
  }
  obtenerRutaRequisitosProcedimientoAdmisionElemento(): string {
    return `administracion/gestion-procedimientos-elementos-requisitos/procedimientos/${apiUrlEnviroment.idProcedimientoAdmsion}/centro-salud/1`;
  }
  formularioProcedimiento: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private router:Router,private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioProcedimiento = this.fb.group({
      titulo: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { 
    this.obtenerProcedimiento(apiUrlEnviroment.idProcedimientoAdmsion);
  }
  obtenerProcedimiento(idProcedimiento: any) {
    this.informacionCentroMedicoService.obtenerProcedimiento(idProcedimiento).subscribe((procedimiento:Procedimiento)=>{
      this.formularioProcedimiento.setValue({
        titulo:procedimiento.nombreProcedimiento
      });
      this.imagenes=procedimiento.imagenes;
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
