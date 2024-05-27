import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { FichasMedicasService } from '../../services/fichas-medicas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-fichas-medicas',
  templateUrl: './gestion-fichas-medicas.component.html',
  styleUrls: ['./gestion-fichas-medicas.component.css']
})
export class GestionFichasMedicasComponent {
  misFichasMedicas: any[] = [];

  constructor(private router:Router,private fichasMedicasService:FichasMedicasService) {
    this.obtenerConsultasMedicas();
   }
   obtenerConsultasMedicas(){
    this.fichasMedicasService.obtenerFichasMedicasDePaciente(1).subscribe((data:any)=>{
      this.misFichasMedicas=data;
    });
  }
  deleteItem(item: string) {
    Swal.fire({
      title: 'Estas seguro de realizar la accion',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      heightAuto:false,
      
      scrollbarPadding:true,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fichasMedicasService.eliminarFichaMedica(item).subscribe((data:any)=>{
          this.obtenerConsultasMedicas();
        });
      }
    });
    
  }

  showDetails(arg0: any) {
    this.router.navigate(['/paciente/detalle-ficha-medica', arg0]);
  }
}
