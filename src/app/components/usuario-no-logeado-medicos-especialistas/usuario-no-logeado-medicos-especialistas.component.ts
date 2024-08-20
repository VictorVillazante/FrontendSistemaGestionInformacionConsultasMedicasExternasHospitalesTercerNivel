import { Component, OnInit } from '@angular/core';
import { MedicoEspecialista } from 'src/app/models/MedicoEspecialista';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-medicos-especialistas',
  templateUrl: './usuario-no-logeado-medicos-especialistas.component.html',
  styleUrls: ['./usuario-no-logeado-medicos-especialistas.component.css']
})
export class UsuarioNoLogeadoMedicosEspecialistasComponent implements OnInit{
  listadoMedicosEspecialistas:MedicoEspecialista[]=[];
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(): void {
      this.obtenerMedicos();
  }
  obtenerMedicos() {
    this.informacionCentroMedicoService.obtenerMedicos().subscribe(m=>{
      this.listadoMedicosEspecialistas=m;
    })
  }
}
