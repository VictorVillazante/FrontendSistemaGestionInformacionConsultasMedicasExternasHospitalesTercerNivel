import { Component, Input, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { v4 as uuidv4 } from 'uuid';
import { ScriptsService } from '../../services/scripts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-especialidades-procedimientos',
  templateUrl: './section-especialidades-procedimientos.component.html',
  styleUrls: ['./section-especialidades-procedimientos.component.css']
})
export class SectionEspecialidadesProcedimientosComponent implements OnInit{
  @Input() listadoEspecialidades:Especialidad[]=[];
  @Input() tipoProcedimientos:string="";
  @Input() rutaElementos!:(id:number)=>void;
  id:string=uuidv4().replace(/-/g,"");
  constructor(private router:Router,private scriptsService:ScriptsService){}
  ngOnInit(): void {
      this.scriptsService.cargarCarousel(this.id);
  }
}
