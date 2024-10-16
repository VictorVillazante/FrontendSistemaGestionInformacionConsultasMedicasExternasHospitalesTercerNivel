import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { PapeletasInternacionService } from 'src/app/services/papeletas-internacion.service';

@Component({
  selector: 'app-actualizacion-papeleta-internacion',
  templateUrl: './actualizacion-papeleta-internacion.component.html',
  styleUrls: ['./actualizacion-papeleta-internacion.component.css']
})
export class ActualizacionPapeletaInternacionComponent {
  handleIdHistoriaClinica($event: number) {
    this.papeletaInternacionForm.patchValue({ idHistoriaClinica: $event })
  }
  id:any;
  papeletaInternacionForm: FormGroup;
  constructor(private alertasService:AlertasService,private pacientesService:PacientesService,private activatedRoute: ActivatedRoute,private fb: FormBuilder,private papeletasInternacionService:PapeletasInternacionService) { 
    this.papeletaInternacionForm = this.fb.group({
      diagnostico: [''],
      fechaIngreso: [''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica: [''],
      diagnosticoPresuntivo:['']
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetallePapeletaInternacion(this.id);
    });
  }
  obtenerDetallePapeletaInternacion(idPapeleta:any){
    this.papeletasInternacionService.obtenerPapeletaInternacion(idPapeleta).subscribe((data:any)=>{
      this.papeletaInternacionForm.setValue({
        diagnostico:data.diagnostico,
        fechaIngreso:data.fechaIngreso,
        idPaciente:data.idPaciente,
        ciPaciente:data.ciPropietario,
        idHistoriaClinica:data.idHistoriaClinica,
        diagnosticoPresuntivo:data.diagnosticoPresuntivo
      });
    });
  }
  onSubmit() {
    this.alertasService.confirmarAccion("Estas seguro de actualizar papeleta de internacion?").then(
      (esConfirmado)=>{
        if (esConfirmado) {
          this.papeletasInternacionService.actualizarPapeletaInternacion(this.id,this.papeletaInternacionForm).subscribe(
            (data:any)=>this.alertasService.mensajeConfirmacion(),
            (error:any)=>this.alertasService.mensajeError()
          );
        }
      }
    );
  }
}
