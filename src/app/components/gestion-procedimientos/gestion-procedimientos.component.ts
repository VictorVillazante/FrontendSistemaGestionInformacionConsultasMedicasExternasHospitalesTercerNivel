import { Component, OnInit } from '@angular/core';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-procedimientos',
  templateUrl: './gestion-procedimientos.component.html',
  styleUrls: ['./gestion-procedimientos.component.css']
})
export class GestionProcedimientosComponent implements OnInit{
  redireccionarGestionPasosProcedimiento(idProcedimiento: number) {
    this.router.navigate(['/administracion/gestion-pasos-procedimiento', idProcedimiento]);
  }
  eliminarProcedimiento(arg0: number) {
  }
  actualizarProcedimiento(arg0: number) {
  }
  filtrarProcedimientos() {
    let procedimientosAuxAFiltrar=this.listadoProcedimientosAux;
    if(this.nombreProcedimiento){
      procedimientosAuxAFiltrar=procedimientosAuxAFiltrar.filter((procedimiento:ProcedimientoElemento)=>{
        return this.quitarAcentos(procedimiento.nombreProcedimiento.toLowerCase()).includes(this.quitarAcentos(this.nombreProcedimiento.toLowerCase()));
      })      
    }
    if(!this.nombreProcedimiento){
      this.listadoProcedimientos=this.listadoProcedimientosAux;
    }
    this.listadoProcedimientos=procedimientosAuxAFiltrar;
  }
  nombreProcedimiento:any;
  listadoProcedimientos:ProcedimientoElemento[]=[];
  listadoProcedimientosAux:ProcedimientoElemento[]=[];
  constructor(private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.informacionCentroMedicoService.obtenerProcedimientos().subscribe((procedimientos)=>{
      this.listadoProcedimientos=procedimientos;
      this.listadoProcedimientosAux=procedimientos;

    });
  }
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
