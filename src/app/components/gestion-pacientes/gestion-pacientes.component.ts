import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-pacientes',
  templateUrl: './gestion-pacientes.component.html',
  styleUrls: ['./gestion-pacientes.component.css']
})
export class GestionPacientesComponent {
  pacientes: any[] = [];
  constructor(private router:Router,private pacientesService:PacientesService) {
    this.obtenerPacientes();
   }
   obtenerPacientes(){
    this.pacientesService.obtenerPacientes().subscribe((data:any)=>{
      this.pacientes=data;
    });
  }
  editarDatos(id: any) {
    this.router.navigate(["/administrador/modificar-paciente",id]);
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
        this.pacientesService.eliminarPaciente(id).subscribe((data:any)=>{
          this.obtenerPacientes();
        });
      }
    });
  }
}
