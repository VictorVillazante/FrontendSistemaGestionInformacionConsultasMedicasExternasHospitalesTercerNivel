import { Component, OnInit } from '@angular/core';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { ActivatedRoute } from '@angular/router';
import { MedicoEspecialista } from 'src/app/models/MedicoEspecialista';
import { MedicosService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-usuario-no-logeado-descripcion-medicos',
  templateUrl: './usuario-no-logeado-descripcion-medicos.component.html',
  styleUrls: ['./usuario-no-logeado-descripcion-medicos.component.css']
})
export class UsuarioNoLogeadoDescripcionMedicosComponent implements OnInit{
  idMedico!:number;
  medico!:MedicoEspecialista;
  constructor(private activatedRoute:ActivatedRoute,private medicosService:MedicosService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.idMedico=params["id"];
      if(this.idMedico){
        this.obtenerDatosMedico(this.idMedico);
      }
    });
  }
  obtenerDatosMedico(id:number) {
    this.medicosService.obtenerMedico(id).subscribe((medico)=>{
      this.medico=medico;
    });
  }
}
