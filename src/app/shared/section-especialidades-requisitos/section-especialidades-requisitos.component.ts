import { AfterViewInit, Component, Input } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { v4 as uuidv4 } from 'uuid';
import { ScriptsService } from '../../services/scripts.service';

@Component({
  selector: 'app-section-especialidades-requisitos',
  templateUrl: './section-especialidades-requisitos.component.html',
  styleUrls: ['./section-especialidades-requisitos.component.css']
})
export class SectionEspecialidadesRequisitosComponent implements AfterViewInit{
  @Input() listadoEspecialidades:Especialidad[]=[];
  @Input() tipoRequisito:string="";
  @Input() descripcionSeccionRequisitos:string="";
  id:string=uuidv4().replace(/-/g," ");
  constructor(private scriptsService:ScriptsService){}
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
}
