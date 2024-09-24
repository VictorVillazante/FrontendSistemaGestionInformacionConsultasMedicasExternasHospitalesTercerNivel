import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { Paso } from 'src/app/models/Paso';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-procedimientos',
  templateUrl: './usuario-no-logeado-procedimientos.component.html',
  styleUrls: ['./usuario-no-logeado-procedimientos.component.css']
})
export class UsuarioNoLogeadoProcedimientosComponent {
  // tipo:string="";
  // idEspecialidad:number=0;
  // titulo:string="Procedimiento ";
  // @Input() listadoProcedimientoPasos:Paso[]=[];
  // constructor(private route:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}
  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.tipo = params['tipo'];
  //     console.log(this.tipo);
  //     this.titulo+=this.tipo.replace(/-/g," ");
  //     this.idEspecialidad = params['id'];
  //     this.cargarRequisitosPorTipo(this.tipo,this.idEspecialidad);
  //   });
  // }
  // // obtenerEspecialidad(idEspecialidad: number) {
  // //   this.informacionCentroMedicoService.obtenerEspecialidad(this.idEspecialidad).subscribe((e)=>{
  // //     this.cargarRequisitosPorTipo(this.tipo,e);
  // //   })
  // // }
  // obtenerProcedimientoObtencionFichaMedicaPresencial(idEspecialidad: number) {
  //   this.informacionCentroMedicoService.obtenerProcedimientoObtencionFichaMedicaPresencialDeEspecialidad(idEspecialidad).subscribe((e)=>{
  //     this.listadoProcedimientoPasos=e.pasos;
  //   })
  // }

  // cargarRequisitosPorTipo(tipo: string,idEspecialidad:number) {
  //   switch(this.tipo){
  //     case "obtencion-ficha-presencial":
  //       this.obtenerProcedimientoObtencionFichaMedicaPresencial(idEspecialidad);
  //     break;
  //   }
  // }
  
}
