import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { ScriptsService } from 'src/app/services/scripts.service';
import { v4 as uuidv4 } from 'uuid';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
@Component({
  selector: 'app-especialidades-atencion',
  templateUrl: './especialidades-atencion.component.html',
  styleUrls: ['./especialidades-atencion.component.css']
})
export class EspecialidadesAtencionComponent implements AfterViewInit,OnInit{
  id: string = uuidv4().replace(/-/g, '');
 listadoEspecialidades:Especialidad[]=[];
  constructor(private scriptsService:ScriptsService,private informacionCentroMedicoService:InformacionCentroMedicoService){
  }
  ngOnInit(): void {
    this.obtenerEspecialidades();
  }
  obtenerEspecialidades() {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe((resp)=>{
      this.listadoEspecialidades=resp;
    });
  }
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
}
