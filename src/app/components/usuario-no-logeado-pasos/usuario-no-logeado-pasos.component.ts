import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paso } from 'src/app/models/Paso';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-pasos',
  templateUrl: './usuario-no-logeado-pasos.component.html',
  styleUrls: ['./usuario-no-logeado-pasos.component.css']
})
export class UsuarioNoLogeadoPasosComponent {
  tipo:string="";
  idElemento:number=0;
  idProcedimiento:number=0;
  @Input() titulo:string="";
  @Input() listaPasos:Paso[]=[];
  constructor(private route:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'].replace(/-/g," ").toLowerCase();
      this.idElemento = params['idElemento'];
      this.idProcedimiento = params['idProcedimiento'];
      this.obtenerPasosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipo);
    });
  }

  obtenerPasosProcedimientoElemento(idProcedimiento: number,idElemento:number,tipo:string) {
    this.informacionCentroMedicoService.obtenerPasosProcedimientoElemento(idProcedimiento,idElemento,tipo).subscribe((e)=>{
      this.listaPasos=e.requisitos;
    })
  }
}

