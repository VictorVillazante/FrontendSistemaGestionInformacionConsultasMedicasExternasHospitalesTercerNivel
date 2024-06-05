import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';

@Component({
  selector: 'app-mis-notas-evolucion',
  templateUrl: './mis-notas-evolucion.component.html',
  styleUrls: ['./mis-notas-evolucion.component.css']
})
export class MisNotasEvolucionComponent {
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/detalle-historia-clinica', idHistoriaClinica])
   );
   window.open(url, '_blank');
   }
  notasEvolucion: any[] = [];
  constructor(private router:Router,private notaEvolucionService:NotaEvolucionService) {
    this.obtenerNotasEvolucion();
   }
   obtenerNotasEvolucion(){
    const idPaciente=JSON.parse(localStorage.getItem("userDetails")??"{}").idPaciente;

    this.notaEvolucionService.obtenerNotasEvolucionPorIdPaciente(idPaciente).subscribe((data:any)=>{
      this.notasEvolucion=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-nota-evolucion",id]);
  }
}
