import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.component.html',
  styleUrls: ['./detalle-receta.component.css']
})
export class DetalleRecetaComponent {
  id:any;
  formularioReceta: FormGroup;
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerReceta(this.id);
    });
  }
  constructor(private activatedRoute: ActivatedRoute,private fb:FormBuilder,private recetasService:RecetasService){
    this.formularioReceta = this.fb.group({
      cambiosPacienteResultadosTratamiento:[''],
      idHistoriaClinica:[''],
    });
  }
  obtenerReceta(id:any){
    this.recetasService.obtenerReceta(id).subscribe((data:any)=>{
      this.formularioReceta.patchValue({
        cambiosPacienteResultadosTratamiento:data.cambiosPacienteResultadosTratamiento,
        idHistoriaClinica:data.idHistoriaClinica,
      });
    });
  }
}
