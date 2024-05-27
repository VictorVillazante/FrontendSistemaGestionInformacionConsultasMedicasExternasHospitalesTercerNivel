import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotasReferenciaService } from 'src/app/services/notas-referencia.service';

@Component({
  selector: 'app-gestion-notas-referencia',
  templateUrl: './gestion-notas-referencia.component.html',
  styleUrls: ['./gestion-notas-referencia.component.css']
})
export class GestionNotasReferenciaComponent {

  notasReferencia: any[] = [];
  constructor(private router:Router,private notasReferenciaService:NotasReferenciaService) {
    this.obtenerRecetas();
   }
   obtenerRecetas(){
    this.notasReferenciaService.obtenerNotasReferencia().subscribe((data:any)=>{
      this.notasReferencia=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-nota-referencia",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/medico/modificar-nota-referencia",id]);
  }
}
