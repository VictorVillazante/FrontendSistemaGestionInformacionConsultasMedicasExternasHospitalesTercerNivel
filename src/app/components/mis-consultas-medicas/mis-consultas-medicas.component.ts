import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicosService } from 'src/app/services/medicos.service';
import { FichasMedicasService } from '../../services/fichas-medicas.service';

@Component({
  selector: 'app-mis-consultas-medicas',
  templateUrl: './mis-consultas-medicas.component.html',
  styleUrls: ['./mis-consultas-medicas.component.css']
})
export class MisConsultasMedicasComponent {
  misConsultasMedicas: any[] = [];
  fecha:any="2024-10-05"
  constructor(private router:Router,private fichasMedicasService:FichasMedicasService) {
    this.obtenerConsultasMedicas();
   }
   obtenerConsultasMedicas(){
    const idMedico=JSON.parse(localStorage.getItem("userDetails")??"{}").idMedico;
    this.fichasMedicasService.obtenerMisConsultasMedicas(idMedico).subscribe((data:any)=>{
      this.misConsultasMedicas=data;
    });
   }

}
