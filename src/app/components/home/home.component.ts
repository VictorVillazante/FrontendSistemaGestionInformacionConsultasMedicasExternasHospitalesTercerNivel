import { Component, OnInit } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Especialidad } from 'src/app/models/Especialidad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  listadoEspecialidades:Especialidad[]=[];
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
      this.informacionCentroMedicoService.obtenerEspecialidades().subscribe(e=>{
        this.listadoEspecialidades=e;
      })
  }
}
