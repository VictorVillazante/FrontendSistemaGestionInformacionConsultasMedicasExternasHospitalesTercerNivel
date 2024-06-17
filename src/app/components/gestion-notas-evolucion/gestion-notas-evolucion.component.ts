import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotaEvolucionService } from '../../services/nota-evolucion.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-gestion-notas-evolucion',
  templateUrl: './gestion-notas-evolucion.component.html',
  styleUrls: ['./gestion-notas-evolucion.component.css']
})
export class GestionNotasEvolucionComponent {
  filtrarNotasEvolucion(event: Event) {
    let notasEvolucionAuxAFiltrar=this.notasEvolucion;
    console.log(this.fecha);
    if(this.fecha){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        const fechaFormateada = formatDate(notaEvolucion.updatedAt, 'yyyy-MM-dd', 'en-US');
        return fechaFormateada==this.fecha
      })
    }
    console.log(this.ciPaciente);
    if(this.ciPaciente){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.ciPropietario.includes(this.ciPaciente);
      })
    }
    this.notasEvolucionAux=notasEvolucionAuxAFiltrar;
    if(!this.fecha && !this.ciPaciente){
      this.notasEvolucionAux=this.notasEvolucion;
    }  
  }
  notasEvolucionAux:any[]=[];
  ciPaciente:any;
  fecha:any;
  notasEvolucion: any[] = [];
  constructor(private router:Router,private notaEvolucionService:NotaEvolucionService) {
    this.obtenerNotasEvolucion();
   }
   verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
     this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
   );
   window.open(url, '_blank');
   }
   obtenerNotasEvolucion(){
    this.notaEvolucionService.obtenerNotasEvolucion().subscribe((data:any)=>{
      this.notasEvolucion=data;
      this.notasEvolucionAux=this.notasEvolucion;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-nota-evolucion",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/medico/modificar-nota-evolucion",id]);
  }
}
