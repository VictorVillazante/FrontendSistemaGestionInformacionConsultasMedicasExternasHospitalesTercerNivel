import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FichasMedicasService } from '../../services/fichas-medicas.service';
import { TurnosAtencionMedicaService } from '../../services/turnos-atencion-medica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-ficha-medica',
  templateUrl: './registro-ficha-medica.component.html',
  styleUrls: ['./registro-ficha-medica.component.css']
})
export class RegistroFichaMedicaComponent {

  horariosAtencion:any[]=[];
  constructor(private fichasMedicasService:FichasMedicasService,private turnosAtencionMedicaService:TurnosAtencionMedicaService) {
    this.obtenerTurnosAtencionMedica();
  } 
  obtenerTurnosAtencionMedica(){
    this.turnosAtencionMedicaService.obtenerTurnosAtencionMedica().subscribe((data:any)=>{
      this.horariosAtencion=data;
    });
  }
  agregarFichaMedica(id: any) {
    let consultaMedica={
      "idTurnoAtencionMedica":id,
      "email":localStorage.getItem("email")
    };
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
        this.fichasMedicasService.registroFichaMedica(consultaMedica).subscribe((data:any)=>{
          console.log(data);
        });
      }
    });
   
  }
}
