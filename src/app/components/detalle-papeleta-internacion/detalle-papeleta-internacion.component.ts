import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PapeletasInternacionService } from '../../services/papeletas-internacion.service';

@Component({
  selector: 'app-detalle-papeleta-internacion',
  templateUrl: './detalle-papeleta-internacion.component.html',
  styleUrls: ['./detalle-papeleta-internacion.component.css']
})
export class DetallePapeletaInternacionComponent {
  verDetalleHistoriaClinica(arg0: any) {
  }
  papeletaInternacionForm: FormGroup;
  id:any;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,private papeletasInternacionService:PapeletasInternacionService){
    this.papeletaInternacionForm = this.fb.group({
      diagnostico: [''],
      fechaIngreso: [''],
      idPaciente:[''],
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
