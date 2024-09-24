import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requisito } from 'src/app/models/Requisito';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Especialidad } from 'src/app/models/Especialidad';

@Component({
  selector: 'app-usuario-no-logeado-requisitos',
  templateUrl: './usuario-no-logeado-requisitos.component.html',
  styleUrls: ['./usuario-no-logeado-requisitos.component.css']
})
export class UsuarioNoLogeadoRequisitosComponent implements OnInit{
  tipo:string="";
  idEspecialidad:number=0;
  titulo:string="Requisitos ";
  @Input() listaRequisitos:Requisito[]=[];
  constructor(private route:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      this.titulo+=this.tipo.replace(/-/g," ");
      this.idEspecialidad = params['id'];
      this.cargarRequisitosPorTipo(this.tipo,this.idEspecialidad);
    });
  }
  obtenerProcedimientoObtencionFichaMedicaPresencial(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerProcedimientoObtencionFichaMedicaPresencialDeEspecialidad(idEspecialidad).subscribe((e)=>{
      this.cargarRequisitosPorTipo(this.tipo,e);
    })
  }
  obtenerProcedimientoAtencionConsultaExterna(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerProcedimientoAtencionConsultaExternaDeEspecialidad(idEspecialidad).subscribe((e)=>{
      this.cargarRequisitosPorTipo(this.tipo,e);
    })
  }
  cargarRequisitosPorTipo(tipo: string,idEspecialidad:number) {
    switch(tipo){
      case "obtencion-ficha-presencial":
        this.obtenerProcedimientoObtencionFichaMedicaPresencial(idEspecialidad);
      break;
      case "atencion-consulta-externa":
        this.obtenerProcedimientoAtencionConsultaExterna(idEspecialidad);
      break;
    }
  }
  
}
