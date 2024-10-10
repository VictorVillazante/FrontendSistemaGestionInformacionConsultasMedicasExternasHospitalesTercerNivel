import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { Router } from '@angular/router';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-gestion-especialidades',
  templateUrl: './gestion-especialidades.component.html',
  styleUrls: ['./gestion-especialidades.component.css']
})
  export class GestionEspecialidadesComponent implements OnInit{
  redireccionarGestionarProcedimientosElemento(id: number) {
    this.router.navigate([`administracion/gestion-procedimientos-elementos/especialidades/${id}`]);
  }
  redireccionarRegistroEspecialidad() {
    this.router.navigate(["administracion/registro-especialidad"]);
  }

  redireccionarActualizarEspecialidad(idEspecialidad: number) {
    this.router.navigate(["administracion/modificar-especialidad",idEspecialidad]);
  }
  eliminarEspecialidad(idEspecialidad: number) {
    this.alertasService.confirmarAccion("Esta seguro de eliminar la especialidad?").then((respuesta:boolean)=>{
      if(respuesta){
        this.informacionCentroMedicoService.eliminarEspecialidad(idEspecialidad).subscribe(
          (data:any)=>{
            this.obtenerEspecialidades();
            this.alertasService.mensajeConfirmacion();
          },
          (error:any)=>this.alertasService.mensajeError(),
        );
      }
    })
  }
  especialidades:Especialidad[]=[];
  especialidadesAux:Especialidad[]=[];
  nombreEspecialidad:string="";
  constructor(private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) {}
  ngOnInit() {
    this.obtenerEspecialidades();
  }
  obtenerEspecialidades() {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe((data:any)=>{
      this.especialidades=data;
      this.especialidadesAux=data;
    });
  }
  filtrarEspecialidades() {
    let especialidadesAuxAFiltrar=this.especialidadesAux;
    if(this.nombreEspecialidad){
      especialidadesAuxAFiltrar=especialidadesAuxAFiltrar.filter((especialidad:Especialidad)=>{
        return this.quitarAcentos(especialidad.nombre.toLowerCase()).includes(this.quitarAcentos(this.nombreEspecialidad.toLowerCase()));
      })      
    }
    this.especialidades=especialidadesAuxAFiltrar;
    if(!this.nombreEspecialidad){
      this.especialidades=this.especialidadesAux;
    }
  }
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
