import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InterconsultasService } from '../../services/interconsultas.service';

@Component({
  selector: 'app-mis-solicitudes-interconsulta',
  templateUrl: './mis-solicitudes-interconsulta.component.html',
  styleUrls: ['./mis-solicitudes-interconsulta.component.css']
})
export class MisSolicitudesInterconsultaComponent implements OnInit {
  interconsultas: any[] = [];
  idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
  constructor(private router: Router, private interconsultasService: InterconsultasService) { }
  ngOnInit(): void {
    this.obtenerInterconultasPaciente();
  }
  obtenerInterconultasPaciente() {
    this.interconsultasService.obtenerInterconsultasPaciente(this.idPaciente).subscribe((data: any) => {
      this.interconsultas = data;
    });
  }
  handleInterconsultas($event:any){
    this.interconsultas=$event
  }
  verDetalleInterconsulta(idInterconsuta:any){
    this.router.navigate(["/detalle-interconsulta",idInterconsuta]);

  }
}
