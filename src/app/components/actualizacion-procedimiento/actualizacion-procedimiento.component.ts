import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-actualizacion-procedimiento',
  templateUrl: './actualizacion-procedimiento.component.html',
  styleUrls: ['./actualizacion-procedimiento.component.css']
})
export class ActualizacionProcedimientoComponent implements OnInit{
  idProcedimiento!:number;
  formularioProcedimiento: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioProcedimiento = this.fb.group({
      titulo: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params)=>{
      this.idProcedimiento = params['id'];
      this.obtenerProcedimiento(this.idProcedimiento);
    })
  }
  obtenerProcedimiento(idProcedimiento: any) {
    this.informacionCentroMedicoService.obtenerProcedimiento(idProcedimiento).subscribe((procedimiento:any)=>{
      this.formularioProcedimiento.setValue({
        titulo:procedimiento.nombreProcedimiento
      });
      this.imagenes=procedimiento.imagenes;
    })
  }


  onSubmit(): void {
    if (this.formularioProcedimiento.valid) {
      this.informacionCentroMedicoService.actualizarProcedimiento(this.idProcedimiento,this.formularioProcedimiento,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
