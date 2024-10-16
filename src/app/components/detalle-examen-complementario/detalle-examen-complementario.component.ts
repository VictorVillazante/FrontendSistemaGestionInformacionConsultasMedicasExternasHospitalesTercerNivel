import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamenesComplementariosService } from 'src/app/services/examenes-complementarios.service';

@Component({
  selector: 'app-detalle-examen-complementario',
  templateUrl: './detalle-examen-complementario.component.html',
  styleUrls: ['./detalle-examen-complementario.component.css']
})
export class DetalleExamenComplementarioComponent {
  verDetalleHistoriaClinica(arg0: any) {
  }
  examenComplementarioForm: FormGroup;
  id:any;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,private examenesComplementariosService:ExamenesComplementariosService){
    this.examenComplementarioForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      resumenResultados: [''],
      fechaResultado: [''],
      fechaSolicitud: [''],
      idPaciente:[''],
      pacientePropietario:[''],
      ciPaciente:[''],
      idMedico:[''],
      nombreMedico:[''],
      idHistoriaClinica: [''],
      diagnosticoPresuntivo:[''],
      createdAt:[''],
      updatedAt:['']
    });
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetalleExamenComplementario(this.id);
    });
  }
  obtenerDetalleExamenComplementario(idExamen:any){
    this.examenesComplementariosService.obtenerExamenesComplementario(idExamen).subscribe((data:any)=>{
      this.examenComplementarioForm.setValue({
        nombre:data.nombre,
        descripcion:data.descripcion,
        resumenResultados:data.resumenResultados,
        fechaResultado:data.fechaResultado,
        fechaSolicitud:data.fechaSolicitud,
        idPaciente:data.idPaciente,
        ciPaciente:data.ciPropietario,
        pacientePropietario:data.pacientePropietario,
        idMedico:data.idMedico,
        nombreMedico:data.nombreMedico,
        idHistoriaClinica:data.idHistoriaClinica,
        diagnosticoPresuntivo:data.diagnosticoPresuntivo,
        createdAt:data.createdAt,
        updatedAt:data.updatedAt
      });
    });
  }

}
