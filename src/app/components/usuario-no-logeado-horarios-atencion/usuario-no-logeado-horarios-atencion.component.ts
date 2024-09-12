import { Component } from '@angular/core';
import { TurnosAtencionMedicaService } from '../../services/turnos-atencion-medica.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-usuario-no-logeado-horarios-atencion',
  templateUrl: './usuario-no-logeado-horarios-atencion.component.html',
  styleUrls: ['./usuario-no-logeado-horarios-atencion.component.css']
})
export class UsuarioNoLogeadoHorariosAtencionComponent {
  filtrarPorFecha(event: Event) {
    if(this.fecha){
      console.log(this.fecha)
      this.turnosAtencionMedicaAux=this.turnosAtencionMedica.filter((turnoAtencionMedica:any)=>{
        const fechaFormateada = formatDate( turnoAtencionMedica[5], 'yyyy-MM-dd', 'en-US');
        return fechaFormateada==this.fecha
      })
    }else{
      this.turnosAtencionMedicaAux=this.turnosAtencionMedica;
    }
    
  }
  fecha:any;
  turnosAtencionMedicaAux:any[]=[];
  turnosAtencionMedica:any[]=[];
  constructor(private turnosAtencionMedicaService:TurnosAtencionMedicaService){}
  ngOnInit(){
    this.turnosAtencionMedicaService.obtenerTurnosAtencionMedica().subscribe((data:any)=>{
      this.turnosAtencionMedica=data;
      this.turnosAtencionMedicaAux=data;
    });
  }
}
