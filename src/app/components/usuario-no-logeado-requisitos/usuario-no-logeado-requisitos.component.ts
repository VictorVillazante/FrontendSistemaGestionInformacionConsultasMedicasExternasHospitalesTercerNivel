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
  idElemento:number=0;
  idProcedimiento:number=0;
  @Input() titulo:string="";
  @Input() listaRequisitos:Requisito[]=[];
  constructor(private route:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'].replace(/-/g," ").toLowerCase();
      this.idElemento = params['idElemento'];
      this.idProcedimiento = params['idProcedimiento'];
      this.obtenerRequisitosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipo);
    });
  }

  obtenerRequisitosProcedimientoElemento(idProcedimiento: number,idElemento:number,tipo:string) {
    this.informacionCentroMedicoService.obtenerRequisitosProcedimientoElemento(idProcedimiento,idElemento,tipo).subscribe((e)=>{
      this.listaRequisitos=e.requisitos;
    })
  }
}
