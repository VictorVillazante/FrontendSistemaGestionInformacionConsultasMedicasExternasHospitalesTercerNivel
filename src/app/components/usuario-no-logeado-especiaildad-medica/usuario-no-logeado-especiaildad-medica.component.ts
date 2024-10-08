import { Component, OnInit } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Especialidad } from 'src/app/models/Especialidad';
import { ActivatedRoute } from '@angular/router';
import { TurnosAtencionMedicaService } from '../../services/turnos-atencion-medica.service';

@Component({
  selector: 'app-usuario-no-logeado-especiaildad-medica',
  templateUrl: './usuario-no-logeado-especiaildad-medica.component.html',
  styleUrls: ['./usuario-no-logeado-especiaildad-medica.component.css']
})
export class UsuarioNoLogeadoEspeciaildadMedicaComponent implements OnInit{
  idEspecialidad!:number;
  especialidad!:Especialidad;
  requisitosProcedimientosCards=[
    {
      titulo: 'Procedimiento ficha medica presencial',
      descripcion: 'Pasos detallados de procedimiento de obtencion de ficha medica',
      ruta:"/procedimiento/ficha-medica-presencial",
      rol:""
    },
    {
      titulo: 'Requisitos minimos obtencion ficha presencial',
      descripcion: 'Listado requisitos minimos para obtencion de ficha presencial',
      ruta:"/requisitos/obtencion-ficha-presencial",
      rol:""
    },
    {
      titulo: 'Requisitos minimos atencion sonsulta externa',
      descripcion: 'Listado requisitos minimos para atencion consulta externa',
      ruta:"/requisitos/atencion-consulta-externa",
      rol:""
    }
  ];
  turnosAtencionMedicaEspecialidad: any[] = [];
  constructor(private turnosAtencionMedicaService:TurnosAtencionMedicaService,private activatedRoute:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idEspecialidad=params["id"];
      if(this.idEspecialidad){
        this.obtenerTurnosAtencionMedicaDeEspecialidad(this.idEspecialidad);
        this.obtenerDatosEspecialidd(this.idEspecialidad);
      }
    });
  }
  obtenerTurnosAtencionMedicaDeEspecialidad(idEspecialidad: number) {
    this.turnosAtencionMedicaService.obtenerTurnosAtencionMedicaDeEspecialidad(idEspecialidad).subscribe(e=>{
      this.turnosAtencionMedicaEspecialidad=e;
    });
  }
  obtenerDatosEspecialidd(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerEspecialidad(idEspecialidad).subscribe(e=>{
      this.especialidad=e;
    });
  }
  
}
