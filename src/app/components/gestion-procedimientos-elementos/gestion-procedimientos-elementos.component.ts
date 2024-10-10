import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcedimientoElemento } from 'src/app/models/ProcedimientoElemento';
import { Procedimiento } from 'src/app/models/Procedimieto';
import { Rol } from 'src/app/models/Rol';
import { RolUsuario } from 'src/app/models/RolUsuario';
import { AlertasService } from 'src/app/services/alertas.service';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestion-procedimientos-elementos',
  templateUrl: './gestion-procedimientos-elementos.component.html',
  styleUrls: ['./gestion-procedimientos-elementos.component.css']
})
export class GestionProcedimientosElementosComponent {
  redireccionarGestionPasosProcedimientoElemento(idProcedimiento: number,idElemento: number,tipoElemento: string) {
    this.router.navigate([`administracion/gestion-procedimientos-elementos-pasos/procedimientos/${idProcedimiento}/${tipoElemento}/${idElemento}`]);
  }
  redireccionarGestionRequisitosProcedimientoElemento(idProcedimiento: number,idElemento: number,tipoElemento: string) {
    this.router.navigate([`administracion/gestion-procedimientos-elementos-requisitos/procedimientos/${idProcedimiento}/${tipoElemento}/${idElemento}`]);
  }
  registrarProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de registrar procedimiento de ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.registrarProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerProcedimientosElemento(this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
   
  }
  eliminarProcedimientoElemento(idProcedimiento:number,idElemento:number,tipoElemento:string) {
    this.alertasService.confirmarAccion(`Estas seguro de procedimiento del ${tipoElemento.toLowerCase()}?`).then((result) => {
      if (result) {
        this.informacionCentroMedicoService.eliminarProcedimientoElemento(idProcedimiento,idElemento,tipoElemento).subscribe(() => {
          this.obtenerProcedimientosElemento(this.idElemento,this.tipoElemento);
          this.alertasService.mensajeConfirmacion();
        },(error)=>this.alertasService.mensajeError());
      }
    })
  }
  procedimientos:Procedimiento[]=[];
  procedimientosElemento:ProcedimientoElemento[]=[];
  idElemento!:number;
  tipoElemento!:string;


  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.idElemento=params["id"];
      this.tipoElemento=params["tipo"];
      this.obtenerProcedimientos();
      this.obtenerProcedimientosElemento(this.idElemento,this.tipoElemento);
    })

  }
  obtenerProcedimientos() {
    this.informacionCentroMedicoService.obtenerProcedimientos().subscribe((procedimientos) => {
      this.procedimientos = procedimientos;
    });
  }

  obtenerProcedimientosElemento(idElemento:number,tipoElemento:string) {
    this.informacionCentroMedicoService.obtenerProcedimientosElemento(idElemento,tipoElemento).subscribe((procedimientossElemento) => {
      this.procedimientosElemento = procedimientossElemento;
    });
    
  }
}
