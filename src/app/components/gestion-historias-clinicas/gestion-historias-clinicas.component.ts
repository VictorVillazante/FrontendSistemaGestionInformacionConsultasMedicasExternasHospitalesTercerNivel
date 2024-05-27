import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriasClinicasService } from '../../services/historias-clinicas.service';

@Component({
  selector: 'app-gestion-historias-clinicas',
  templateUrl: './gestion-historias-clinicas.component.html',
  styleUrls: ['./gestion-historias-clinicas.component.css']
})
export class GestionHistoriasClinicasComponent {

  historiasClinicas: any[] = [];
  constructor(private router:Router,private historiasClinicasService:HistoriasClinicasService) {
    this.obtenerHistoriasClinicas();
   }
   obtenerHistoriasClinicas(){
    this.historiasClinicasService.obtenerHistoriasClinicas().subscribe((data:any)=>{
      this.historiasClinicas=data;
    });
  }
  viewDetails(id:any){
    this.router.navigate(["/paciente/detalle-historia-clinica",id]);
  }
  editItem(id: any) {
    this.router.navigate(["/medico/modificar-historia-clinica",id]);
  }
}
