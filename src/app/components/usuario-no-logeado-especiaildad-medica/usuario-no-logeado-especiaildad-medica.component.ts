import { Component, OnInit } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Especialidad } from 'src/app/models/Especialidad';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-no-logeado-especiaildad-medica',
  templateUrl: './usuario-no-logeado-especiaildad-medica.component.html',
  styleUrls: ['./usuario-no-logeado-especiaildad-medica.component.css']
})
export class UsuarioNoLogeadoEspeciaildadMedicaComponent implements OnInit{
  idEspecialidad!:number;
  especialidad!:Especialidad;
  constructor(private activatedRoute:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idEspecialidad=params["id"];
      if(this.idEspecialidad){
        this.obtenerDatosEspecialidd(this.idEspecialidad);
      }
    });
  }
  obtenerDatosEspecialidd(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerEspecialidad(idEspecialidad).subscribe(e=>{
      this.especialidad=e;
    });
  }
  
}
