import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurnosAtencionMedicaService } from 'src/app/services/turnos-atencion-medica.service';
import Swal from 'sweetalert2';

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
    this.router.navigate(["/detalle-turno-atencion",id]);
  }
  editarDato(id: any) {
    this.router.navigate(["/administrador/modificar-turno-atencion",id]);
  }
  eliminarDato(id: any) {
    Swal.fire({
      text:"Estas seguro de realizar la accion?",
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#28afb0',
      denyButtonColor: '#0a4a6e',
      denyButtonText: `Cancelar`,
      heightAuto:false,
      scrollbarPadding:true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.turnosAtencionMedicaService.eliminarTurnoAtencionMedico(id).subscribe((data:any)=>{
          Swal.fire({
            icon: 'success',
            text:"Se realizo la accion correctamente",
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28afb0',
            heightAuto:false,
            scrollbarPadding:true,
          })
          this.obtenerTurnosAtencion();
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            text:"Error al realizar la accion",
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28afb0',
            heightAuto:false,
            scrollbarPadding:true,
          })
        });
      }
    });
  }
}
