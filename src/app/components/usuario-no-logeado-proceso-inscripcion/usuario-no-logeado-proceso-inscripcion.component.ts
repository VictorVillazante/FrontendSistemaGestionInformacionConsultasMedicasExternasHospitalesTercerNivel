import { Component, Input, OnInit } from '@angular/core';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Requisito } from 'src/app/models/Requisito';

@Component({
  selector: 'app-usuario-no-logeado-proceso-inscripcion',
  templateUrl: './usuario-no-logeado-proceso-inscripcion.component.html',
  styleUrls: ['./usuario-no-logeado-proceso-inscripcion.component.css']
})
export class UsuarioNoLogeadoProcesoInscripcionComponent implements OnInit {
  listadoProcedimientoPasos: PasoProcedimiento[] = [];
  listadoRequisitos:Requisito[]=[];
  constructor(private informacionCentroMedicoService: InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.obtenerInformacionCentroSalud();
  }
  obtenerInformacionCentroSalud() {
    this.informacionCentroMedicoService.obtenerInformacionCentroSalud().subscribe(centroSalud => {
      this.listadoProcedimientoPasos = centroSalud.procedimientoProcesoInscripcion;
      this.listadoRequisitos = centroSalud.requisitosProcesoInscripcion;
    })
  }
}
