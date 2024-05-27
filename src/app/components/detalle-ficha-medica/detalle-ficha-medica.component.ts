import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { FichasMedicasService } from '../../services/fichas-medicas.service';

@Component({
  selector: 'app-detalle-ficha-medica',
  templateUrl: './detalle-ficha-medica.component.html',
  styleUrls: ['./detalle-ficha-medica.component.css']
})
export class DetalleFichaMedicaComponent {
  id:any;
  fichaMedicaDetalle:any;
  constructor(private activatedRoute: ActivatedRoute,private fichasMedicasService:FichasMedicasService) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.obtenerDetalleFichaMedica(this.id);
    });
  }
  obtenerDetalleFichaMedica(id: any) {
    this.fichasMedicasService.detalleFichaMedica(id).subscribe((data:any)=>{
      this.fichaMedicaDetalle=data[0];
    });
  }
  
}