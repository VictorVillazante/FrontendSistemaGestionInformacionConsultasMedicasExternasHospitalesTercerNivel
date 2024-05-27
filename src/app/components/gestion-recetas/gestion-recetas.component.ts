import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-recetas',
  templateUrl: './gestion-recetas.component.html',
  styleUrls: ['./gestion-recetas.component.css']
})
export class GestionRecetasComponent {

  recetas: any[] = [];
  constructor(private router:Router,private recetasService:RecetasService) {
    this.obtenerRecetas();
   }
   obtenerRecetas(){
    this.recetasService.obtenerRecetas().subscribe((data:any)=>{
      this.recetas=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-receta",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/medico/modificar-receta",id]);
  }
}
