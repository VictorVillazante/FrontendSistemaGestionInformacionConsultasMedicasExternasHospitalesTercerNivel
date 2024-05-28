import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotaEvolucionService } from '../../services/nota-evolucion.service';

@Component({
  selector: 'app-gestion-notas-evolucion',
  templateUrl: './gestion-notas-evolucion.component.html',
  styleUrls: ['./gestion-notas-evolucion.component.css']
})
export class GestionNotasEvolucionComponent {
  notasEvolucion: any[] = [];
  constructor(private router:Router,private notaEvolucionService:NotaEvolucionService) {
    this.obtenerRecetas();
   }
   verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
   );
   window.open(url, '_blank');
   }
   obtenerRecetas(){
    this.notaEvolucionService.obtenerNotasEvolucion().subscribe((data:any)=>{
      this.notasEvolucion=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-nota-evolucion",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/medico/modificar-nota-evolucion",id]);
  }
}
