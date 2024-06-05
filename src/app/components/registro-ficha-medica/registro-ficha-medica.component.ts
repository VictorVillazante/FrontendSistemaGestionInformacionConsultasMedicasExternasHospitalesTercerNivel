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
      text:"Estas seguro de realizar la accion?",
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#28afb0',
      denyButtonColor: '#0a4a6e',
      denyButtonText: `Cancelar`,
      heightAuto:false,
      scrollbarPadding:true
    }).then((result) => {
      if (result.isConfirmed) {
        this.fichasMedicasService.registroFichaMedica(consultaMedica).subscribe((data:any)=>{
          console.log(data);
        });
      }
    });
   
  }
}
