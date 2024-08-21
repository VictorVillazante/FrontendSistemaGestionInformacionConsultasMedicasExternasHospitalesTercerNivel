import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-filtrado-documentos-paciente',
  templateUrl: './formulario-filtrado-documentos-paciente.component.html',
  styleUrls: ['./formulario-filtrado-documentos-paciente.component.css']
})
export class FormularioFiltradoDocumentosPacienteComponent {
  @Input() documentos!:any;
  @Output() documentosEvent = new EventEmitter<any>();
  documentosAux:any[]=[];
  ngOnInit(): void {
      this.documentosAux=this.documentos;
  }
  emitEventCambiarDocumentos(documentos:any) {
    this.documentosEvent.emit(documentos);
  }
  filtrarNotasEvolucion() {
    console.log("filtrar")
    let documentosAuxAFiltrar=this.documentosAux;
    if(this.fechaInicio && this.fechaFin){
      documentosAuxAFiltrar=documentosAuxAFiltrar.filter((notaEvolucion:any)=>{
        const fechaFormateada = formatDate(notaEvolucion.updatedAt, 'yyyy-MM-dd', 'en-US');
        const fechaFormateadaDate = new Date(fechaFormateada);
        const fechaInicioDate = new Date(this.fechaInicio);
        const fechaFinDate = new Date(this.fechaFin);
        return fechaFormateadaDate>=fechaInicioDate && fechaFormateadaDate<=fechaFinDate;
      })
    }
    if(this.nombreMedico){
      documentosAuxAFiltrar=documentosAuxAFiltrar.filter((notaEvolucion:any)=>{
        return this.quitarAcentos(notaEvolucion.nombreMedico.toLowerCase()).includes(this.quitarAcentos(this.nombreMedico.toLowerCase()));
      })
    }
    if(this.nombreEspecialidad){
      documentosAuxAFiltrar=documentosAuxAFiltrar.filter((notaEvolucion:any)=>{
        return this.quitarAcentos(notaEvolucion.nombreEspecialidad.toLowerCase()).includes(this.quitarAcentos(this.nombreEspecialidad.toLowerCase()));
      })
    }
    if(this.diagnosticoPresuntivo){
      documentosAuxAFiltrar=documentosAuxAFiltrar.filter((notaEvolucion:any)=>{
        return this.quitarAcentos(notaEvolucion.diagnosticoPresuntivo.toLowerCase()).includes(this.quitarAcentos(this.diagnosticoPresuntivo.toLowerCase()));
      })
    }
    this.documentos=documentosAuxAFiltrar;
    if(!this.fechaInicio && !this.fechaFin && !this.nombreEspecialidad && !this.diagnosticoPresuntivo){
      this.documentos=this.documentosAux;
    } 
    this.emitEventCambiarDocumentos(this.documentos);
  }
  cambiarTipoBusqueda(){
    this.esBusquedaAvanzada=!this.esBusquedaAvanzada;
  }
  constructor(){}
  esBusquedaAvanzada:boolean=false;
  nombreMedico:any;
  nombreEspecialidad:any;
  diagnosticoPresuntivo:any;
  fechaInicio:any;
  fechaFin:any;
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
