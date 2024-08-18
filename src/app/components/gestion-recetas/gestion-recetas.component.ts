import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-recetas',
  templateUrl: './gestion-recetas.component.html',
  styleUrls: ['./gestion-recetas.component.css']
})
export class GestionRecetasComponent implements OnInit {
  recetas: any[] = [];
  constructor(private router: Router, private recetasService: RecetasService) {
  }
  ngOnInit(): void {
    this.obtenerRecetas();
  }
  handleRecetas($event: any) {
    this.recetas = $event;
  }
  obtenerRecetas() {
    this.recetasService.obtenerRecetas().subscribe((data: any) => {
      this.recetas = data;
    });
  }
  verDetalleReceta(id: any) {
    this.router.navigate(["/detalle-receta", id]);
  }
  editarReceta(id: any) {
    this.router.navigate(["/medico/modificar-receta", id]);
  }
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
    );
    window.open(url, '_blank');
  }
}
