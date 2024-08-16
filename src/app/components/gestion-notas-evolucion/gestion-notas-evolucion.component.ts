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
  filtrarNotasEvolucion() {
    console.log("filtrar")
    let notasEvolucionAuxAFiltrar=this.notasEvolucion;
    if(this.fechaInicio && this.fechaFin){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        const fechaFormateada = formatDate(notaEvolucion.updatedAt, 'yyyy-MM-dd', 'en-US');
        const fechaFormateadaDate = new Date(fechaFormateada);
        const fechaInicioDate = new Date(this.fechaInicio);
        const fechaFinDate = new Date(this.fechaFin);
        return fechaFormateadaDate>=fechaInicioDate && fechaFormateadaDate<=fechaFinDate;
      })
    }
    console.log(this.ciPaciente);
    if(this.ciPaciente){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.ciPropietario.includes(this.ciPaciente);
      })
    }
    if(this.nombrePaciente){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.pacientePropietario.includes(this.nombrePaciente);
      })
    }
    if(this.nombreMedico){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.nombreMedico.includes(this.nombreMedico);
      })
    }
    if(this.nombreEspecialidad){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.nombreEspecialidad.includes(this.nombreEspecialidad);
      })
    }
    if(this.diagnosticoPresuntivo){
      notasEvolucionAuxAFiltrar=notasEvolucionAuxAFiltrar.filter((notaEvolucion:any)=>{
        return notaEvolucion.diagnosticoPresuntivo.includes(this.diagnosticoPresuntivo);
      })
    }
    this.notasEvolucionAux=notasEvolucionAuxAFiltrar;
    if(!this.fechaInicio && !this.ciPaciente){
      this.notasEvolucionAux=this.notasEvolucion;
    }  
  }
  notasEvolucionAux:any[]=[];
  ciPaciente:any;
  nombrePaciente:any;
  nombreMedico:any;
  nombreEspecialidad:any;
  diagnosticoPresuntivo:any;
  fechaInicio:any;
  fechaFin:any;
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
