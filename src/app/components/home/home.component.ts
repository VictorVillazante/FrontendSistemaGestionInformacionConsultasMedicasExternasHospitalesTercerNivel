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
  rutaElementosRequisitosProcedimientoPeticionFichaMedicaPresencial(id:number):void{
    this.router.navigate(["procedimientos/1/elementos/"+id+"/tipo-elemento/especialidades/requisitos"]);
  }
  rutaElementosPasosProcedimientoPeticionFichaMedicaPresencial(id:number):void{
    this.router.navigate(["procedimientos/1/elementos/"+id+"/tipo-elemento/especialidades/pasos"]);
  }
  rutaElementosRequisitosProcedimientoMinimosAtencionConsultaExterna(id:number):void{
    this.router.navigate(["procedimientos/2/elementos/"+id+"/tipo-elemento/especialidades/requisitos"]);
  }
}
