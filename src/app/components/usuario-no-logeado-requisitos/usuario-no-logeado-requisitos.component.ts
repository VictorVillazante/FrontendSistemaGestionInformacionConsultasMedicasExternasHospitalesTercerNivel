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
      console.log(this.tipo);
      this.titulo+=this.tipo.replace(/-/g," ");
      this.idEspecialidad = params['id'];
      this.obtenerEspecialidad(this.idEspecialidad);
    });
  }
  obtenerEspecialidad(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerEspecialidad(this.idEspecialidad).subscribe((e)=>{
      this.cargarRequisitosPorTipo(this.tipo,e);
    })
  }
  cargarRequisitosPorTipo(tipo: string,especialidad:Especialidad) {
    switch(this.tipo){
      case "obtencion-ficha-presencial":
        this.listaRequisitos=especialidad.requisitosSolicitudFichaMedica;
      break;
      case "atencion-consulta-externa":
        this.listaRequisitos=especialidad.requisitosMinimosAtencionConsultaExterna;
      break;
    }
  }
  
}
