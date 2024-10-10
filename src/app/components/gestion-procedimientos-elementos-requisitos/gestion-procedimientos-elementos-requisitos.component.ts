import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paso } from 'src/app/models/Paso';
import { Requisito } from 'src/app/models/Requisito';
import { RequisitoProcedimientoElemento } from 'src/app/models/RequisitoProcedimientoElemento';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-procedimientos-elementos-requisitos',
  templateUrl: './gestion-procedimientos-elementos-requisitos.component.html',
  styleUrls: ['./gestion-procedimientos-elementos-requisitos.component.css']
})
export class GestionProcedimientosElementosRequisitosComponent {
  registrarRequisitoProcedimientoElemento(idRequisito:number,idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de registrar requisito en el procedimiento de ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.registrarRequisitoProcedimientoElemento(idRequisito,idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerRequisitosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
   
  }
  eliminarRequisitoProcedimientoElemento(idRequisito:number,idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de eliminar requisito en el procedimiento del ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.eliminarRequisitoProcedimientoElemento(idRequisito,idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerRequisitosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
  }
  requisitos:Requisito[]=[];
  requisitosProcedimientoElemento:Requisito[]=[];
  idElemento!:number;
  tipoElemento!:string;
  idProcedimiento!:number;


  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.idElemento=params["idElemento"];
      this.tipoElemento=params["tipoElemento"];
      this.idProcedimiento=params["idProcedimiento"];
      this.obtenerRequisitos();
      this.obtenerRequisitosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
    })

  }
  obtenerRequisitos() {
    this.informacionCentroMedicoService.obtenerRequisitos().subscribe((requisitos) => {
      this.requisitos = requisitos;
    });
  }

  obtenerRequisitosProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerRequisitosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe((requisitosProcedimientoElemento) => {
      this.requisitosProcedimientoElemento = requisitosProcedimientoElemento;
    });
    
  }
}
