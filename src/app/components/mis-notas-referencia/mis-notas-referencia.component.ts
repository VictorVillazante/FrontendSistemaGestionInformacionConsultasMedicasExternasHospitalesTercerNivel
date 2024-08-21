import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotasReferenciaService } from 'src/app/services/notas-referencia.service';

@Component({
  selector: 'app-mis-notas-referencia',
  templateUrl: './mis-notas-referencia.component.html',
  styleUrls: ['./mis-notas-referencia.component.css']
})
export class MisNotasReferenciaComponent {
  verDetalleHistoriaClinica(idHistoriaClinica: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/detalle-historia-clinica', idHistoriaClinica])
    );
    window.open(url, '_blank');
  }
  notasReferencia: any[] = [];

  constructor(private router: Router, private notasReferenciaService: NotasReferenciaService) {
    this.idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
    this.obtenerMisHistoriasClinicas(this.idPaciente);
  }
  handleNotasReferencia($event:any){
    this.notasReferencia=$event;
  }
  verDetalleNotaReferencia(id: number) {
    this.router.navigate(["/detalle-nota-referencia", id]);
  }
  idPaciente: any = 1;
  obtenerMisHistoriasClinicas(idPaciente: any) {
    this.notasReferenciaService.obtenerNotasReferenciaPaciente(idPaciente).subscribe((data: any) => {
      this.notasReferencia = data;
    });
  }
}
