import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriasClinicasService } from '../../services/historias-clinicas.service';

@Component({
  selector: 'app-mis-historias-clnicas',
  templateUrl: './mis-historias-clnicas.component.html',
  styleUrls: ['./mis-historias-clnicas.component.css']
})
export class MisHistoriasClnicasComponent {
  historiasClinicas: any[] = [];

  constructor(private router:Router,private historiasClinicasService:HistoriasClinicasService) {
    this.obtenerMisHistoriasClinicas(1);
   }
  viewDetails(id:any){
    this.router.navigate(["/paciente/detalle-historia-clinica",id]);
  }
  idPaciente:any=1;
  obtenerMisHistoriasClinicas(idPaciente:any){
    this.historiasClinicasService.obtenerHistoriasClinicasDePaciente(idPaciente).subscribe((data:any)=>{
      console.log(data);
      this.historiasClinicas=data;
    });
  }
}
