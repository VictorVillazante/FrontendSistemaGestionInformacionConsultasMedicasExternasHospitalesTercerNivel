import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/Consultorio';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-consultorios',
  templateUrl: './gestion-consultorios.component.html',
  styleUrls: ['./gestion-consultorios.component.css']
})
export class GestionConsultoriosComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerConsultorios();
  }
  obtenerConsultorios() {
    this.informacionCentroMedicoService.obtenerConsultorios().subscribe((consultorios) => {
      this.consultorios = consultorios;
      this.consultoriosAux = consultorios;
    });
  }

  redireccionarVerDetalleConsultorio(arg0: any) {
  throw new Error('Method not implemented.');
  }
  eliminarConsultorio(idConsultorio: any) {
    this.alertasService.confirmarAccion("Estas seguro de eliminar consultorio?").then((result) => {
      if(result){
        this.informacionCentroMedicoService.eliminarConsultorio(idConsultorio).subscribe(() => {
          this.obtenerConsultorios();
          this.alertasService.mensajeConfirmacion();
        },(error:any)=>{
          this.alertasService.mensajeError();
        })
      }
    })
  }
  redireccionarActualizarConsultorio(idConsutorio: any) {
   this.router.navigate(["/administracion/modificar-consultorio",idConsutorio]);
  }
  consultorios: Consultorio[]=[];
  consultoriosAux: Consultorio[]=[];
  constructor(private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }

  redireccionarRegistroConsultorio() {
    this.router.navigate(["/administracion/registro-consultorio"]);
  }
  filtrarConsultorio() {
    let consultoriosAuxAFiltrar=this.consultoriosAux;
    if(this.nombreConsultorio){
      consultoriosAuxAFiltrar=consultoriosAuxAFiltrar.filter((consultorio:Consultorio)=>{
        return this.quitarAcentos((consultorio.nombre).toLowerCase()).includes(this.quitarAcentos(this.nombreConsultorio.toLowerCase()));
      })      
    }
    if(!this.nombreConsultorio){
      this.consultorios=this.consultoriosAux;
    }
    this.consultorios=consultoriosAuxAFiltrar;
  }
  nombreConsultorio: any;
  quitarAcentos(texto: string): string {
    const textoNormalizado: string = texto.normalize('NFD');
    return textoNormalizado.replace(/[\u0300-\u036f]/g, '');
  }
}
