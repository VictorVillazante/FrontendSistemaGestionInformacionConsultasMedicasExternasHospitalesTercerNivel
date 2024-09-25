import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute } from '@angular/router';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';
import { Imagen } from 'src/app/models/Imagen';
import { Paso } from 'src/app/models/Paso';

@Component({
  selector: 'app-gestion-pasos',
  templateUrl: './gestion-pasos.component.html',
  styleUrls: ['./gestion-pasos.component.css']
})
export class GestionPasosComponent implements OnInit{
  eliminarPaso(idPaso: number) {
    this.alertasService.confirmarAccion("Esta seguro de eliminar el paso?").then((confirmacion)=>{
      if(confirmacion){
        this.informacionCentroMedicoService.eliminarPaso(idPaso).subscribe(
          (params)=>{
            this.alertasService.mensajeConfirmacion();
            this.obtenerPasos();
          },
        (error:any)=>this.alertasService.mensajeError())
      }
    })
  }
  actualizarPaso(paso: Paso) {
    this.idPaso=paso.idPaso;
    this.imagenes=paso.imagenes;
    this.formularioPaso.setValue({
      nombre:paso.nombre,
      descripcion:paso.descripcion
    });
  }
  idPaso!:number;
  formularioPaso:FormGroup;
  imagenes:Imagen[]=[];
  pasos:Paso[]=[];
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private informacionCentroMedicoService:InformacionCentroMedicoService,private fb:FormBuilder){
    this.formularioPaso=fb.group({
      "nombre":["",Validators.required],
      "descripcion":["",Validators.required]
    });
  }
  ngOnInit(): void {
    this.obtenerPasos();
    // this.activatedRoute.params.subscribe((params)=>{
    //   this.idProcedimiento=params['id'];
    //   this.obtenerProcedimiento(this.idPaso);
    // })
  }
  obtenerPasos() {
    this.informacionCentroMedicoService.obtenerPasos().subscribe((data)=>{
      this.pasos=data;
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
  modificarPaso() {
    if(this.idPaso && this.formularioPaso.valid){
      this.informacionCentroMedicoService.modificarPaso(this.idPaso,this.formularioPaso,this.imagenes).subscribe(
        (params)=>{
          this.alertasService.mensajeConfirmacion();
          this.obtenerPasos();
        },
      (error:any)=>this.alertasService.mensajeError())
    }
  }
  registrarPaso() {
    // if(this.formularioPaso.valid){
    //   this.informacionCentroMedicoService.registrarPasoProcedimiento(this.idProcedimiento,this.formularioPaso).subscribe(
    //     (params)=>this.alertasService.mensajeConfirmacion(),
    //   (error:any)=>this.alertasService.mensajeError())
    // }
    if(this.formularioPaso.valid){
      this.informacionCentroMedicoService.registrarPaso(this.idPaso,this.formularioPaso,this.imagenes).subscribe(
        (params)=>{
          this.alertasService.mensajeConfirmacion();
          this.obtenerPasos();
        },
      (error:any)=>this.alertasService.mensajeError())
    }
  }
}
