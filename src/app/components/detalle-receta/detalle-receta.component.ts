import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
   );
   window.open(url, '_blank');
  }
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private fb:FormBuilder,private recetasService:RecetasService){
    this.formularioReceta = this.fb.group({
      nombreGenericoMedicamentoPreescrito:[''],
      viaCuidadoEspecialesAdministracion:[''],
      concentracionDosificacion:[''],
      frecuenciaAdministracion24hrs:[''],
      duracionTratamiento:[''],
      fechaVencimiento:[''],
      precaucionesEspeciales:[''],
      indicacionesEspeciales:[''],
      idMedico:[''],
      idHistoriaClinica:[''],
      createdAt:[''],
      updatedAt:[''],
      deletedAt:['']
    });
  }
  obtenerReceta(id:any){
    this.recetasService.obtenerReceta(id).subscribe((data:any)=>{
      this.formularioReceta.patchValue({
        nombreGenericoMedicamentoPreescrito:data.nombreGenericoMedicamentoPreescrito,
        viaCuidadoEspecialesAdministracion:data.viaCuidadoEspecialesAdministracion,
        concentracionDosificacion:data.concentracionDosificacion,
        frecuenciaAdministracion24hrs:data.frecuenciaAdministracion24hrs,
        duracionTratamiento:data.duracionTratamiento,
        fechaVencimiento:data.fechaVencimiento,
        precaucionesEspeciales:data.precaucionesEspeciales,
        indicacionesEspeciales:data.indicacionesEspeciales,
        idMedico:data.idMedico,
        idHistoriaClinica:data.idHistoriaClinica,
        createdAt:data.createdAt,
        updatedAt:data.updatedAt
      });
    });
  }
}
