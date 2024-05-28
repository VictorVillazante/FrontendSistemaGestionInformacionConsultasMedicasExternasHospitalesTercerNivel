import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotasReferenciaService } from '../../services/notas-referencia.service';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-nota-evolucion',
  templateUrl: './detalle-nota-evolucion.component.html',
  styleUrls: ['./detalle-nota-evolucion.component.css']
})
export class DetalleNotaEvolucionComponent {
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
   );
   window.open(url, '_blank');
  }
  id:any;
  formularioNotaEvolucion: FormGroup;
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerNotaEvoucion(this.id);
    });
  }
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private fb:FormBuilder,private notaEvolucionService:NotaEvolucionService){
    this.formularioNotaEvolucion = this.fb.group({
      cambiosPacienteResultadosTratamiento:[''],
      idHistoriaClinica:[''],
      idNotaEvolucion:[''],
      idMedico:[''],
      idPropietario:[''],
      ciPropietario:[''],
      pacientePropietario:[''],
      createdAt:[''],
      updatedAt:['']
    });
  }
  obtenerNotaEvoucion(id:any){
    this.notaEvolucionService.obtenerNotaEvolucion(id).subscribe((data:any)=>{
      this.formularioNotaEvolucion.patchValue({
        cambiosPacienteResultadosTratamiento:data.cambiosPacienteResultadosTratamiento,
        idHistoriaClinica:data.idHistoriaClinica,
        idNotaEvolucion:data.idNotaEvolucion,
        idMedico:data.idMedico,
        idPropietario:data.idPropietario,
        ciPropietario:data.ciPropietario,
        pacientePropietario:data.pacientePropietario,
        createdAt:data.createdAt,
        updatedAt:data.updatedAt
      });
    });
  }
}
