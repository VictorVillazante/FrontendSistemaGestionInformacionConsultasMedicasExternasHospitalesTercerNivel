import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { Requisito } from 'src/app/models/Requisito';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-requerimientos',
  templateUrl: './gestion-requerimientos.component.html',
  styleUrls: ['./gestion-requerimientos.component.css']
})
export class GestionRequerimientosComponent {
  eliminarRequisito(idRequisito: number) {
    this.alertasService.confirmarAccion("Esta seguro de eliminar el requisito?").then((confirmacion)=>{
      if(confirmacion){
        this.informacionCentroMedicoService.eliminarRequisito(idRequisito).subscribe(
          (params)=>{
            this.alertasService.mensajeConfirmacion();
            this.obtenerRequisitos();
          },
        (error:any)=>this.alertasService.mensajeError())
      }
    })
  }
  actualizarRequisito(requisito: Requisito) {
    this.idRequisito=requisito.idRequisito;
    this.imagenes=requisito.imagenes;
    this.formularioRequisito.setValue({
      titulo:requisito.titulo,
      descripcion:requisito.descripcion
    });
  }
  idRequisito!:number;
  formularioRequisito:FormGroup;
  imagenes:Imagen[]=[];
  requisitos:Requisito[]=[];
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private informacionCentroMedicoService:InformacionCentroMedicoService,private fb:FormBuilder){
    this.formularioRequisito=fb.group({
      "titulo":["",Validators.required],
      "descripcion":["",Validators.required]
    });
  }
  ngOnInit(): void {
    this.obtenerRequisitos();
    // this.activatedRoute.params.subscribe((params)=>{
    //   this.idProcedimiento=params['id'];
    //   this.obtenerProcedimiento(this.idPaso);
    // })
  }
  obtenerRequisitos() {
    this.informacionCentroMedicoService.obtenerRequisitos().subscribe((data)=>{
      this.requisitos=data;
    })
  }
  // obtenerProcedimiento(idProcedimiento:number){ 
  //   this.informacionCentroMedicoService.obtenerProcedimientoElemento(idProcedimiento).subscribe((data)=>{
  //     this.procedimiento=data;
  //   })
  // }
  handleImagenes($event:any){
    this.imagenes=$event;
  }
  limpiarFormulario() {
    
  }
  modificarRequisito() {
    if(this.idRequisito && this.formularioRequisito.valid){
      this.informacionCentroMedicoService.modificarRequisito(this.idRequisito,this.formularioRequisito,this.imagenes).subscribe(
        (params)=>{
          this.alertasService.mensajeConfirmacion();
          this.obtenerRequisitos();
        },
      (error:any)=>this.alertasService.mensajeError())
    }
  }
  registrarRequisito() {
    // if(this.formularioPaso.valid){
    //   this.informacionCentroMedicoService.registrarPasoProcedimiento(this.idProcedimiento,this.formularioPaso).subscribe(
    //     (params)=>this.alertasService.mensajeConfirmacion(),
    //   (error:any)=>this.alertasService.mensajeError())
    // }
    if(this.formularioRequisito.valid){
      this.informacionCentroMedicoService.registrarRequisito(this.formularioRequisito,this.imagenes).subscribe(
        (params)=>{
          this.alertasService.mensajeConfirmacion();
          this.obtenerRequisitos();
        },
      (error:any)=>this.alertasService.mensajeError())
    }
  }
}
