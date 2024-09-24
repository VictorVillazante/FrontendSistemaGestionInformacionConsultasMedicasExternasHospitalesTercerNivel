import { Component, Input, OnInit } from '@angular/core';
import { Paso } from 'src/app/models/Paso';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Requisito } from 'src/app/models/Requisito';

@Component({
  selector: 'app-usuario-no-logeado-proceso-inscripcion',
  templateUrl: './usuario-no-logeado-proceso-inscripcion.component.html',
  styleUrls: ['./usuario-no-logeado-proceso-inscripcion.component.css']
})
export class UsuarioNoLogeadoProcesoInscripcionComponent implements OnInit {
  listadoProcedimientoPasos: Paso[] = [];
  listadoRequisitos:Requisito[]=[];
  constructor(private informacionCentroMedicoService: InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.obtenerProcesoInscripcionCentroSalud();
  }
  obtenerProcesoInscripcionCentroSalud() {
    this.informacionCentroMedicoService.obtenerProcesoInscripcionCentroSalud().subscribe(centroSalud => {
      this.listadoProcedimientoPasos = centroSalud.pasos;
      this.listadoRequisitos = centroSalud.requisitos;
    })
  }
}
