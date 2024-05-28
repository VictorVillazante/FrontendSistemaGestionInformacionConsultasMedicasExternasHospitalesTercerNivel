import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicosService } from 'src/app/services/medicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-medicos',
  templateUrl: './gestion-medicos.component.html',
  styleUrls: ['./gestion-medicos.component.css']
})
export class GestionMedicosComponent {
  medicos: any[] = [];
  constructor(private router:Router,private medicosService:MedicosService) {
    this.obtenerPacientes();
   }
   obtenerPacientes(){
    this.medicosService.obtenerMedicos().subscribe((data:any)=>{
      this.medicos=data;
    });
  }
  editarDatos(id: any) {
    this.router.navigate(["/administrador/modificar-medico",id]);
  }
  eliminarDatos(id: any) {
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
        this.medicosService.eliminarMedico(id).subscribe((data:any)=>{
          Swal.fire({
            icon: 'success',
            text:"Se realizo la accion correctamente",
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28afb0',
            heightAuto:false,
            scrollbarPadding:true,
          })
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
