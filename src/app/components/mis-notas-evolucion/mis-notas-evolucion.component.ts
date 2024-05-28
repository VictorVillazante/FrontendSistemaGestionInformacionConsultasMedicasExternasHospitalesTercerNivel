import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotaEvolucionService } from 'src/app/services/nota-evolucion.service';

@Component({
  selector: 'app-mis-notas-evolucion',
  templateUrl: './mis-notas-evolucion.component.html',
  styleUrls: ['./mis-notas-evolucion.component.css']
})
export class MisNotasEvolucionComponent {
  notasEvolucion: any[] = [];
  constructor(private router:Router,private notaEvolucionService:NotaEvolucionService) {
    this.obtenerNotasEvolucion();
   }
   obtenerNotasEvolucion(){
    this.notaEvolucionService.obtenerNotasEvolucion().subscribe((data:any)=>{
      this.notasEvolucion=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-nota-evolucion",id]);
  }
}
