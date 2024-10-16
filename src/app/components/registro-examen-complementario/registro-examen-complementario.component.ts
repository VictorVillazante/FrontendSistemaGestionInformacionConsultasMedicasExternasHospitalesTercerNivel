import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { ExamenesComplementariosService } from 'src/app/services/examenes-complementarios.service';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-registro-examen-complementario',
  templateUrl: './registro-examen-complementario.component.html',
  styleUrls: ['./registro-examen-complementario.component.css']
})
export class RegistroExamenComplementarioComponent {
  handleIdHistoriaClinica($event: number) {
    this.examenComplementarioForm.patchValue({ idHistoriaClinica: $event })
  }
  examenComplementarioForm: FormGroup;
  constructor(private alertasService:AlertasService,private pacientesService:PacientesService,private fb: FormBuilder,private examenComplmentarioService:ExamenesComplementariosService) { 
    this.examenComplementarioForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      resumenResultados: [''],
      fechaResultado: [''],
      fechaSolicitud: [''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica: [''],
      diagnosticoPresuntivo:['']
    });
  }
  onSubmit() {
    this.alertasService.confirmarAccion("Estas seguro de registrar examen complementario?").then(
      (esConfirmado)=>{
        if (esConfirmado) {
          this.examenComplmentarioService.registrarExamencomplementario(this.examenComplementarioForm).subscribe(
            (data:any)=>this.alertasService.mensajeConfirmacion(),
            (error:any)=>this.alertasService.mensajeError()
          );
        }
      }
    );
  }
}
