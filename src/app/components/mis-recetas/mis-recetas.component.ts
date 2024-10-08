import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent {
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/detalle-historia-clinica', idHistoriaClinica])
    );
    window.open(url, '_blank');
  }
  recetas: any[] = [];

  constructor(private router: Router, private recetasService: RecetasService) {
    this.idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
    this.obtenerMisHistoriasClinicas(this.idPaciente);
  }
  verDetalleReceta(id: any) {
    this.router.navigate(["/detalle-receta", id]);
  }
  idPaciente: any = 1;
  obtenerMisHistoriasClinicas(idPaciente: any) {
    this.recetasService.obtenerRecetasPaciente(idPaciente).subscribe((data: any) => {
      this.recetas = data;
    });
  }
  handleRecetas($event:any){
    this.recetas=$event;
  }
}
