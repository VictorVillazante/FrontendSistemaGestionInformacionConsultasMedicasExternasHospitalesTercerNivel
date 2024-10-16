import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamenesComplementariosService } from 'src/app/services/examenes-complementarios.service';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-actualizacion-examen-complementario',
  templateUrl: './actualizacion-examen-complementario.component.html',
  styleUrls: ['./actualizacion-examen-complementario.component.css']
})
export class ActualizacionExamenComplementarioComponent {
  handleIdHistoriaClinica($event: number) {
    this.examenComplementarioForm.patchValue({ idHistoriaClinica: $event })
  }
  id:any;
  examenComplementarioForm: FormGroup;
  constructor(private alertasService:AlertasService,private pacientesService:PacientesService,private activatedRoute: ActivatedRoute,private fb: FormBuilder,private examenComplmentarioService:ExamenesComplementariosService) { 
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
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetalleExamenComplementario(this.id);
    });
  }
  obtenerDetalleExamenComplementario(idExamen:any){
    this.examenComplmentarioService.obtenerExamenesComplementario(idExamen).subscribe((data:any)=>{
      this.examenComplementarioForm.setValue({
        nombre:data.nombre,
        descripcion:data.descripcion,
        resumenResultados:data.resumenResultados,
        fechaResultado:data.fechaResultado,
        fechaSolicitud:data.fechaSolicitud,
        idPaciente:data.idPaciente,
        ciPaciente:data.ciPropietario,
        idHistoriaClinica:data.idHistoriaClinica,
        diagnosticoPresuntivo:data.diagnosticoPresuntivo
      });
    });
  }
  onSubmit() {
    this.alertasService.confirmarAccion("Estas seguro de actualizar examen complementario?").then(
      (esConfirmado)=>{
        if (esConfirmado) {
          this.examenComplmentarioService.actualizarExamenComplementario(this.id,this.examenComplementarioForm).subscribe(
            (data:any)=>this.alertasService.mensajeConfirmacion(),
            (error:any)=>this.alertasService.mensajeError()
          );
        }
      }
    );
  }
}
