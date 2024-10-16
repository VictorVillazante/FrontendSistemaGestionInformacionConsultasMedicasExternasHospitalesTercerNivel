import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotaEvolucionService } from '../../services/nota-evolucion.service';

@Component({
  selector: 'app-gestion-notas-evolucion',
  templateUrl: './gestion-notas-evolucion.component.html',
  styleUrls: ['./gestion-notas-evolucion.component.css']
})
export class GestionNotasEvolucionComponent implements OnInit {
  handleDocumentos($event: any) {
    this.notasEvolucion = $event;
  }
  cargando: boolean = true;
  notasEvolucion: any[] = [];
  notasEvolucionAux: any[] = [];
  
  constructor(private router: Router, private notaEvolucionService: NotaEvolucionService) {
  }
  ngOnInit(): void {
    this.obtenerNotasEvolucion();
  }
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
    );
    window.open(url, '_blank');
  }
  obtenerNotasEvolucion() {
    this.notaEvolucionService.obtenerNotasEvolucion().subscribe((data: any) => {
      this.notasEvolucion = data;
      this.notasEvolucionAux = data;
      this.cargando = false;
    });
  }
  verDetalles(id: any) {
    this.router.navigate(["detalle-nota-evolucion", id]);
  }
  editarDato(id: any) {
    this.router.navigate(["medico/modificar-nota-evolucion", id]);
  }
}
