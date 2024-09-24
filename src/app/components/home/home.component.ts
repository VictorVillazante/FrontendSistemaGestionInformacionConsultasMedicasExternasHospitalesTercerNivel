import { Component, OnInit } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Especialidad } from 'src/app/models/Especialidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  listadoEspecialidades:Especialidad[]=[];
  constructor(private router:Router,private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
      this.informacionCentroMedicoService.obtenerEspecialidades().subscribe(e=>{
        this.listadoEspecialidades=e;
      })
  }
  rutaElementosRequisitosPeticionFichaMedicaPresencial(id:number):void{
    this.router.navigate(["requisitos/obtencion-ficha-presencial/"+id]);
  }
  rutaElementosProcedimientoPeticionFichaMedicaPresencial(id:number):void{
    this.router.navigate(["procedimiento/obtencion-ficha-presencial/"+id]);
  }
  rutaElementosRequisitosMinimosAtencionConsultaExterna(id:number):void{
    this.router.navigate(["requisitos/atencion-consulta-externa/"+id]);
  }
}
