import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Requisito } from 'src/app/models/Requisito';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-requerimientos',
  templateUrl: './gestion-requerimientos.component.html',
  styleUrls: ['./gestion-requerimientos.component.css']
})
export class GestionRequerimientosComponent {
  eliminarRequisito(arg0: number) {
  }
  actualizarRequisito(arg0: number) {
  }
  idRequisitoProcedimiento!:number;
  idProcedimiento!:number;
  formularioRequisitoProcedimiento:FormGroup;
  imagenes:string[]=[];
  listaRequisitosProcedimiento:Requisito[]=[];
  constructor(private alertasService:AlertasService,private informacionCentroMedicoService:InformacionCentroMedicoService,private fb:FormBuilder){
    this.formularioRequisitoProcedimiento=fb.group({
      "titulo":["",Validators.required],
      "descrpcion":["",Validators.required]
    });
  }


handleImagenes($event:any){
  this.imagenes=$event;
}
limpiarFormulario() {
  //this.formularioPasoProcedimiento.
}
modificarRequerimientoProcedimiento() {
  if(this.idRequisitoProcedimiento && this.formularioRequisitoProcedimiento.valid){
    this.informacionCentroMedicoService.modificarRequerimientoProcedimiento(this.idProcedimiento,this.idRequisitoProcedimiento,this.formularioRequisitoProcedimiento).subscribe(
      (params)=>this.alertasService.mensajeConfirmacion(),
    (error:any)=>this.alertasService.mensajeError())
  }
}
registrarRequerimientoProcedimien() {
  if(this.formularioRequisitoProcedimiento.valid){
    this.informacionCentroMedicoService.registrarRequerimientoProcedimien(this.idProcedimiento,this.formularioRequisitoProcedimiento).subscribe(
      (params)=>this.alertasService.mensajeConfirmacion(),
    (error:any)=>this.alertasService.mensajeError())
  }
}
}
