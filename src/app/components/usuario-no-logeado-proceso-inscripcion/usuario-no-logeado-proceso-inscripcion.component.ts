import { Component, Input, OnInit } from '@angular/core';
import { Paso } from 'src/app/models/Paso';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Requisito } from 'src/app/models/Requisito';
import { Procedimiento } from 'src/app/models/Procedimieto';
import { PasoProcedimientoElemento } from 'src/app/models/PasoProcedimientoElemento';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';

@Component({
  selector: 'app-usuario-no-logeado-proceso-inscripcion',
  templateUrl: './usuario-no-logeado-proceso-inscripcion.component.html',
  styleUrls: ['./usuario-no-logeado-proceso-inscripcion.component.css']
})
export class UsuarioNoLogeadoProcesoInscripcionComponent implements OnInit {
  listadoPasos: Paso[] = [];
  listadoRequisitos:Requisito[]=[];
  procesoInscripcion!:ProcedimientoElemento;
  pasosProcedimientoElemento:Paso[]=[];
  requisitosProcedimientoElemento:Requisito[]=[];


  constructor(private informacionCentroMedicoService: InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.obtenerProcesoInscripcionCentroSalud();
  }
  obtenerProcesoInscripcionCentroSalud() {
    this.informacionCentroMedicoService.obtenerProcedimientoElemento(apiUrlEnviroment.idProcedimientoAdmsion,1,"centro-salud").subscribe(procesoInscripcion => {
      this.procesoInscripcion=procesoInscripcion;
      this.obtenerPasosProcedimientoElemento(apiUrlEnviroment.idProcedimientoAdmsion,1,"centro-salud");
      this.obtenerRequisitosProcedimientoElemento(apiUrlEnviroment.idProcedimientoAdmsion,1,"centro-salud");
    })
  }
  obtenerPasosProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerPasosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe((procedimientossElemento) => {
      this.pasosProcedimientoElemento = procedimientossElemento;
    });
  }
  obtenerRequisitosProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerRequisitosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe((requisitosProcedimientoElemento) => {
      this.requisitosProcedimientoElemento = requisitosProcedimientoElemento;
    });
  }
}
