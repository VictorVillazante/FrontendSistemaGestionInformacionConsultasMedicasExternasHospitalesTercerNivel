import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute } from '@angular/router';
import { Procedimiento } from 'src/app/models/Procedimiento';

@Component({
  selector: 'app-gestion-pasos',
  templateUrl: './gestion-pasos.component.html',
  styleUrls: ['./gestion-pasos.component.css']
})
export class GestionPasosComponent implements OnInit{
eliminarPaso(arg0: number) {
}
actualizarPaso(arg0: number) {
}
  idPasoProcedimiento!:number;
  idProcedimiento!:number;
  formularioPasoProcedimiento:FormGroup;
  imagenes:string[]=[];
  procedimiento!:Procedimiento;
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private informacionCentroMedicoService:InformacionCentroMedicoService,private fb:FormBuilder){
    this.formularioPasoProcedimiento=fb.group({
      "nombre":["",Validators.required],
      "descripcion":["",Validators.required]
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.idProcedimiento=params['id'];
      this.obtenerProcedimiento(this.idPasoProcedimiento);
    })
  }
  obtenerProcedimiento(idProcedimiento:number){ 
    this.informacionCentroMedicoService.obtenerProcedimiento(idProcedimiento).subscribe((data)=>{
      this.procedimiento=data;
    })
  }
  handleImagenes($event:any){
    this.imagenes=$event;
  }
  limpiarFormulario() {
    //this.formularioPasoProcedimiento.
  }
  modificarPasoProcedimiento() {
    if(this.idPasoProcedimiento && this.formularioPasoProcedimiento.valid){
      this.informacionCentroMedicoService.modificarPasoProcedimiento(this.idProcedimiento,this.idPasoProcedimiento,this.formularioPasoProcedimiento).subscribe(
        (params)=>this.alertasService.mensajeConfirmacion(),
      (error:any)=>this.alertasService.mensajeError())
    }
  }
  registrarPasoProcedimieno() {
    if(this.formularioPasoProcedimiento.valid){
      this.informacionCentroMedicoService.registrarPasoProcedimiento(this.idProcedimiento,this.formularioPasoProcedimiento).subscribe(
        (params)=>this.alertasService.mensajeConfirmacion(),
      (error:any)=>this.alertasService.mensajeError())
    }
  }
}
