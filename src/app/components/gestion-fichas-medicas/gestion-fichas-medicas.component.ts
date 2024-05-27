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
      title:'',
      html: '<span font-weight: bold;">¿Estás seguro de realizar la acción?</span>',
      
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#3085d6',
      heightAuto:false,
      
      scrollbarPadding:true,
      denyButtonText: `No`,
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
