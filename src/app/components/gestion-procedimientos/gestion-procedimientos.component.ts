import { Component, OnInit } from '@angular/core';
import { Procedimiento } from 'src/app/models/Procedimiento';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-procedimientos',
  templateUrl: './gestion-procedimientos.component.html',
  styleUrls: ['./gestion-procedimientos.component.css']
})
export class GestionProcedimientosComponent implements OnInit{
  eliminarProcedimiento(arg0: number) {
  }
  actualizarProcedimiento(arg0: number) {
  }
  filtrarProcedimientos() {
    let procedimientosAuxAFiltrar=this.listadoProcedimientosAux;
    if(this.nombreProcedimiento){
      procedimientosAuxAFiltrar=procedimientosAuxAFiltrar.filter((procedimiento:Procedimiento)=>{
        return this.quitarAcentos(procedimiento.nombreProcedimiento.toLowerCase()).includes(this.quitarAcentos(this.nombreProcedimiento.toLowerCase()));
      })      
    }
    if(!this.nombreProcedimiento){
      this.listadoProcedimientos=this.listadoProcedimientosAux;
    }
    this.listadoProcedimientos=procedimientosAuxAFiltrar;
  }
  nombreProcedimiento:any;
  listadoProcedimientos:Procedimiento[]=[];
  listadoProcedimientosAux:Procedimiento[]=[];
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService) { }
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
