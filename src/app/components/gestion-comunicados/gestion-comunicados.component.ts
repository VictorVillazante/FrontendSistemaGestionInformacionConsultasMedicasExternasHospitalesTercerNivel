import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Comunicado } from 'src/app/models/Comunicado';

@Component({
  selector: 'app-gestion-comunicados',
  templateUrl: './gestion-comunicados.component.html',
  styleUrls: ['./gestion-comunicados.component.css']
})
export class GestionComunicadosComponent implements OnInit{
  tituloComunicado: any;
  comunicados: Comunicado[]=[];
  comunicadosAux: Comunicado[]=[];

  constructor(private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.obtenerComunicados();
  }
  obtenerComunicados() {
    this.informacionCentroMedicoService.obtenerComunicados().subscribe((comunicados) => {
      this.comunicados = comunicados;
      this.comunicadosAux = comunicados;
    });
  }

  redireccionarVerDetalleComunicado(arg0: any) {
  throw new Error('Method not implemented.');
  }
  eliminarComunicado(idComunicado: any) {
    this.alertasService.confirmarAccion("Estas seguro de eliminar comunicado?").then((result) => {
      if(result){
        this.informacionCentroMedicoService.eliminarComunicado(idComunicado).subscribe(() => {
          this.obtenerComunicados();
          this.alertasService.mensajeConfirmacion();
        },(error:any)=>{
          this.alertasService.mensajeError();
        })
      }
    })
  }
  redireccionarActualizarComunicado(arg0: any) {
  throw new Error('Method not implemented.');
  }
  redireccionarRegistroComunicado() {
  throw new Error('Method not implemented.');
  }
  filtrarComunicados() {
    let comunicadosAuxAFiltrar=this.comunicadosAux;
    if(this.tituloComunicado){
      comunicadosAuxAFiltrar=comunicadosAuxAFiltrar.filter((comunicado:Comunicado)=>{
        return this.quitarAcentos((comunicado.titulo).toLowerCase()).includes(this.quitarAcentos(this.tituloComunicado.toLowerCase()));
      })      
    }
    if(!this.tituloComunicado){
      this.comunicados=this.comunicadosAux;
    }
    this.comunicados=comunicadosAuxAFiltrar;
  }
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
