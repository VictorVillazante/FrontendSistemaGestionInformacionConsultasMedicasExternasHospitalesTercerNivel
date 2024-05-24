import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriasClinicasService } from 'src/app/services/historias-clinicas.service';
import { FichasMedicasService } from '../../services/fichas-medicas.service';

@Component({
  selector: 'app-gestion-fichas-medicas',
  templateUrl: './gestion-fichas-medicas.component.html',
  styleUrls: ['./gestion-fichas-medicas.component.css']
})
export class GestionFichasMedicasComponent {
  misFichasMedicas: any[] = [];

  constructor(private router:Router,private fichasMedicasService:FichasMedicasService) {
    this.obtenerConsultasMedicas();
   }
   obtenerConsultasMedicas(){
    this.fichasMedicasService.obtenerFichasMedicasDePaciente(1).subscribe((data:any)=>{
      this.misFichasMedicas=data;
    });
  }
  editItem(item: string) {
    console.log('Editar', item);
  }

  deleteItem(item: string) {
    console.log('Eliminar', item);
  }
}
