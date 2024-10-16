import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotasReferenciaService } from 'src/app/services/notas-referencia.service';

@Component({
  selector: 'app-gestion-notas-referencia',
  templateUrl: './gestion-notas-referencia.component.html',
  styleUrls: ['./gestion-notas-referencia.component.css']
})
export class GestionNotasReferenciaComponent implements OnInit{
  handleNotasReferencia($event: any) {
    this.notasReferencia=$event;
  }
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/medico/modificar-historia-clinica', idHistoriaClinica])
    );
    window.open(url, '_blank');
  }

  notasReferencia: any[] = [];
  notasReferenciaAux: any[] = [];

  constructor(private router: Router, private notasReferenciaService: NotasReferenciaService) {}
  ngOnInit(): void {
    this.obtenerNotasReferencia();    
  }
  obtenerNotasReferencia() {
    this.notasReferenciaService.obtenerNotasReferencia().subscribe((data: any) => {
      this.notasReferencia = data;
      this.notasReferenciaAux = data;
    });
  }
  verDetallesNotasReferencia(id: any) {
    this.router.navigate(["/detalle-nota-referencia", id]);
  }
  editarNotaReferencia(id: any) {
    this.router.navigate(["/medico/modificar-nota-referencia", id]);
  }
}
