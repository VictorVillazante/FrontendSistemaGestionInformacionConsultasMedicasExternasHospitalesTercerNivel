import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurnosAtencionMedicaService } from 'src/app/services/turnos-atencion-medica.service';

@Component({
  selector: 'app-gestion-turnos-atencion-medica',
  templateUrl: './gestion-turnos-atencion-medica.component.html',
  styleUrls: ['./gestion-turnos-atencion-medica.component.css']
})
export class GestionTurnosAtencionMedicaComponent {

  turnosAtencionMedica: any[] = [];
  constructor(private router:Router,private turnosAtencionMedicaService:TurnosAtencionMedicaService) {
    this.obtenerTurnosAtencion();
   }
   obtenerTurnosAtencion(){
    this.turnosAtencionMedicaService.obtenerTurnosAtencionMedica().subscribe((data:any)=>{
      this.turnosAtencionMedica=data;
    });
  }
  verDetalles(id:any){
    this.router.navigate(["/detalle-turno-atencion-medica",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/medico/modificar-turno-atencion-medica",id]);
  }
}
