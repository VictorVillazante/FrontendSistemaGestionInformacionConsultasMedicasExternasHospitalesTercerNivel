import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-elementos-procedimiento',
  templateUrl: './usuario-no-logeado-elementos-procedimiento.component.html',
  styleUrls: ['./usuario-no-logeado-elementos-procedimiento.component.css']
})
export class UsuarioNoLogeadoElementosProcedimientoComponent {
  redireccionarVerDetalleElementoProcedimiento(idProcedimiento: number, idElemento:number, tipoElemento:string) {
    this.router.navigate([`procedimientos/${idProcedimiento}/elementos/${idElemento}/tipo-elemento/${tipoElemento}`]);
  }
  listadoElementosProcedimiento:ProcedimientoElemento[]=[];
  listadoElementosProcedimientoAux:ProcedimientoElemento[]=[];
  idProcedimiento:number=0;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.idProcedimiento=params['idProcedimiento'];
    })
    this.obtenerElementosProcedimiento();
  }
  obtenerElementosProcedimiento() {
    this.informacionCentroMedicoService.obtenerElementosProcedimiento(this.idProcedimiento).subscribe((procedimientos)=>{
      this.listadoElementosProcedimiento=procedimientos;
      this.listadoElementosProcedimientoAux=procedimientos;
    });
  }
}
