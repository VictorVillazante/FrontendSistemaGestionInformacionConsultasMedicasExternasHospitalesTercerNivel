import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/models/Imagen';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-registro-procedimiento',
  templateUrl: './registro-procedimiento.component.html',
  styleUrls: ['./registro-procedimiento.component.css']
})
export class RegistroProcedimientoComponent {
  formularioProcedimiento: FormGroup;
  imagenes: Imagen[] = [];
  constructor(private alertasService:AlertasService,private fb: FormBuilder,private informacionCentroMedicoService:InformacionCentroMedicoService) {
    this.formularioProcedimiento = this.fb.group({
      titulo: ['', [Validators.required]],
    });
  }
  ngOnInits(): void { }

  onSubmit(): void {
    if (this.formularioProcedimiento.valid) {
      this.informacionCentroMedicoService.registrarProcedimiento(this.formularioProcedimiento,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
