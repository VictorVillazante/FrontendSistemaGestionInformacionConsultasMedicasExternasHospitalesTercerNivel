import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/Especialidad';
import { InformacionCentroMedicoService } from 'src/app/services/informacion-centro-medico.service';

@Component({
  selector: 'app-gestion-especialidades',
  templateUrl: './gestion-especialidades.component.html',
  styleUrls: ['./gestion-especialidades.component.css']
})
export class GestionEspecialidadesComponent implements OnInit{
  especialidades:Especialidad[]=[];
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService) {}
  ngOnInit() {
    this.obtenerEspecialidades();
  }
  obtenerEspecialidades() {
    this.informacionCentroMedicoService.obtenerEspecialidades().subscribe((data:any)=>{
      this.especialidades=data;
    });
  }
}
