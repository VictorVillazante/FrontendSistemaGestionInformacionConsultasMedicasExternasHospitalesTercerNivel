import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotasReferenciaService } from 'src/app/services/notas-referencia.service';

@Component({
  selector: 'app-mis-notas-referencia',
  templateUrl: './mis-notas-referencia.component.html',
  styleUrls: ['./mis-notas-referencia.component.css']
})
export class MisNotasReferenciaComponent {
  notasReferencia: any[] = [];

  constructor(private router:Router,private notasReferenciaService:NotasReferenciaService) {
    this.obtenerMisHistoriasClinicas(1);
   }
   verDetalle(id:any){
    this.router.navigate(["/detalle-nota-referencia",id]);
  }
  idPaciente:any=1;
  obtenerMisHistoriasClinicas(idPaciente:any){
    this.notasReferenciaService.obtenerNotasReferenciaPaciente(idPaciente).subscribe((data:any)=>{
      this.notasReferencia=data;
    });
  }
}
