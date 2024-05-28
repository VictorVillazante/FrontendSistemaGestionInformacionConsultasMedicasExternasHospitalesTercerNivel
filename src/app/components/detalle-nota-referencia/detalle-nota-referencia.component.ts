import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotasReferenciaService } from '../../services/notas-referencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-nota-referencia',
  templateUrl: './detalle-nota-referencia.component.html',
  styleUrls: ['./detalle-nota-referencia.component.css']
})
export class DetalleNotaReferenciaComponent {
  formularioNotaReferencia: FormGroup;
  id:any;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,private notasReferenciaService:NotasReferenciaService){
    this.formularioNotaReferencia = this.fb.group({
      datosClinicos:[''],
      datosIngreso:[''],
      datosEgreso:[''],
      condicionesPacienteMomentoTransferencia:[''],
      informeProcedimientosRealizados:[''],
      tratamientoEfectuado:[''],
      tratamientoPersistePaciente:[''],
      fechaVencimiento:[''],
      advertenciasFactoresRiesgo:[''],
      comentarioAdicional:[''],
      monitoreo:[''],
      informeTrabajoSocial:[''],
      idPaciente:[''],
      ciPaciente:[''],
      idHistoriaClinica:[''],
      diagnosticoPresuntivo:['']
    });
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerNotaReferencia(this.id);
    });
  }
  obtenerNotaReferencia(id: any) {
    this.notasReferenciaService.obtenerNotaReferencia(id).subscribe((data:any)=>{
      this.formularioNotaReferencia.patchValue({
        idNotaReferencia:data.idNotaReferencia,
        datosClinicos:data.datosClinicos,
        datosIngreso:data.datosIngreso,
        datosEgreso:data.datosEgreso,
        condicionesPacienteMomentoTransferencia:data.condicionesPacienteMomentoTransferencia,
        informeProcedimientosRealizados:data.informeProcedimientosRealizados,
        tratamientoEfectuado:data.tratamientoEfectuado,
        tratamientoPersistePaciente:data.tratamientoPersistePaciente,
        fechaVencimiento:data.fechaVencimiento,
        advertenciasFactoresRiesgo:data.advertenciasFactoresRiesgo,
        comentarioAdicional:data.comentarioAdicional,
        monitoreo:data.monitoreo,
        informeTrabajoSocial:data.informeTrabajoSocial,
        idHistoriaClinica:data.idHistoriaClinica,
        idMedico:data.idMedico,
        createdAt:data.createdAt,
        updatedAt:data.updatedAt,
        deletedAt:data.deletedAt
      });
    });
  }
}
