import { Component } from '@angular/core';
import { Paso } from 'src/app/models/Paso';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';
import { Requisito } from 'src/app/models/Requisito';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-no-logeado-descripcion-procedimiento-elemento',
  templateUrl: './usuario-no-logeado-descripcion-procedimiento-elemento.component.html',
  styleUrls: ['./usuario-no-logeado-descripcion-procedimiento-elemento.component.css']
})
export class UsuarioNoLogeadoDescripcionProcedimientoElementoComponent {
  listadoPasos: Paso[] = [];
  listadoRequisitos:Requisito[]=[];
  procedimiento!:ProcedimientoElemento;
  pasosProcedimientoElemento:Paso[]=[];
  requisitosProcedimientoElemento:Requisito[]=[];


  constructor(private informacionCentroMedicoService: InformacionCentroMedicoService,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.obtenerProcesoInscripcionCentroSalud(params['idProcedimiento'],params['idElemento'],params['tipoElemento']);
    })
  }
  obtenerProcesoInscripcionCentroSalud(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe(procedimientoObtenido => {
      this.procedimiento=procedimientoObtenido;
      this.obtenerPasosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento);
      this.obtenerRequisitosProcedimientoElemento(idProcedimiento,idElemento,tipoElemento);
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
