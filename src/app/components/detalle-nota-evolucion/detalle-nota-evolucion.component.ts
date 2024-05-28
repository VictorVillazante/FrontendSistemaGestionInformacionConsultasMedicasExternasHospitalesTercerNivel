import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotasReferenciaService } from '../../services/notas-referencia.service';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-nota-evolucion',
  templateUrl: './detalle-nota-evolucion.component.html',
  styleUrls: ['./detalle-nota-evolucion.component.css']
})
export class DetalleNotaEvolucionComponent {
  id:any;
  formularioNotaEvolucion: FormGroup;
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerNotaEvoucion(this.id);
    });
  }
  constructor(private activatedRoute: ActivatedRoute,private fb:FormBuilder,private notaEvolucionService:NotaEvolucionService){
    this.formularioNotaEvolucion = this.fb.group({
      cambiosPacienteResultadosTratamiento:[''],
      idHistoriaClinica:[''],
    });
  }
  obtenerNotaEvoucion(id:any){
    this.notaEvolucionService.obtenerNotaEvolucion(id).subscribe((data:any)=>{
      this.formularioNotaEvolucion.patchValue({
        cambiosPacienteResultadosTratamiento:data.cambiosPacienteResultadosTratamiento,
        idHistoriaClinica:data.idHistoriaClinica,
      });
    });
  }
}
