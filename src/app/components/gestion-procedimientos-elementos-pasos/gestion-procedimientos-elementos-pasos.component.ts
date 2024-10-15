import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paso } from 'src/app/models/Paso';
import { PasoProcedimientoElemento } from 'src/app/models/PasoProcedimientoElemento';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-procedimientos-elementos-pasos',
  templateUrl: './gestion-procedimientos-elementos-pasos.component.html',
  styleUrls: ['./gestion-procedimientos-elementos-pasos.component.css']
})
export class GestionProcedimientosElementosPasosComponent {

  registrarPasoProcedimientoElemento(idPaso:number,idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de registrar paso en el procedimiento de ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.registrarPasoProcedimientoElemento(idPaso,idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerPasosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
   
  }
  eliminarPasoProcedimientoElemento(idPaso:number,idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de procedimiento del ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.eliminarPasoProcedimientoElemento(idPaso,idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerPasosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
  }
  pasos:Paso[]=[];
  pasosProcedimientoElemento:Paso[]=[];
  idElemento!:number;
  tipoElemento!:string;
  idProcedimiento!:number;


  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.idElemento=params["idElemento"];
      this.tipoElemento=params["tipoElemento"];
      this.idProcedimiento=params["idProcedimiento"];
      this.obtenerPasos();
      this.obtenerPasosProcedimientoElemento(this.idProcedimiento,this.idElemento,this.tipoElemento);
    })

  }
  obtenerPasos() {
    this.informacionCentroMedicoService.obtenerPasos().subscribe((pasos) => {
      this.pasos = pasos;
    });
  }

  obtenerPasosProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerPasosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe((procedimientossElemento) => {
      this.pasosProcedimientoElemento = procedimientossElemento;
    });
    
  }
}
