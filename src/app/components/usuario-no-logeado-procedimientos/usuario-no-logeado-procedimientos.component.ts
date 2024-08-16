import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-procedimientos',
  templateUrl: './usuario-no-logeado-procedimientos.component.html',
  styleUrls: ['./usuario-no-logeado-procedimientos.component.css']
})
export class UsuarioNoLogeadoProcedimientosComponent {
  tipo:string="";
  idEspecialidad:number=0;
  titulo:string="Procedimiento ";
  @Input() listadoProcedimientoPasos:PasoProcedimiento[]=[];
  constructor(private route:ActivatedRoute,private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      console.log(this.tipo);
      this.titulo+=this.tipo.replace(/-/g," ");
      this.idEspecialidad = params['id'];
      this.obtenerEspecialidad(this.idEspecialidad);
    });
  }
  obtenerEspecialidad(idEspecialidad: number) {
    this.informacionCentroMedicoService.obtenerEspecialidad(this.idEspecialidad).subscribe((e)=>{
      this.cargarRequisitosPorTipo(this.tipo,e);
    })
  }
  cargarRequisitosPorTipo(tipo: string,especialidad:Especialidad) {
    switch(this.tipo){
      case "ficha-medica-presencial":
        this.listadoProcedimientoPasos=especialidad.procedimientoObtencionFichaMedicaPresencial;
      break;
    }
  }
  
}
