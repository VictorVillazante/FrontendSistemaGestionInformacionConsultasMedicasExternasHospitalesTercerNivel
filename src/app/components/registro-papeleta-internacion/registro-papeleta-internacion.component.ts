import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { PapeletasInternacionService } from 'src/app/services/papeletas-internacion.service';

@Component({
  selector: 'app-registro-papeleta-internacion',
  templateUrl: './registro-papeleta-internacion.component.html',
  styleUrls: ['./registro-papeleta-internacion.component.css']
})
export class RegistroPapeletaInternacionComponent {
  handleIdHistoriaClinica($event: number) {
    this.papeletaInternacionForm.patchValue({ idHistoriaClinica: $event })
  }
  papeletaInternacionForm: FormGroup;
  constructor(private alertasService:AlertasService,private fb: FormBuilder,private papeletasInternacionService:PapeletasInternacionService) { 
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
    this.alertasService.confirmarAccion("Estas seguro de registrar papeleta de internacion?").then(
      (esConfirmado)=>{
        if (esConfirmado) {
          this.papeletasInternacionService.registrarPapeletaInternacion(this.papeletaInternacionForm).subscribe(
            (data:any)=>this.alertasService.mensajeConfirmacion(),
            (error:any)=>this.alertasService.mensajeError()
          );
        }
      }
    );
  }
}
