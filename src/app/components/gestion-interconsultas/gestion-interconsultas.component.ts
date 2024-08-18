import { Component, OnInit } from '@angular/core';
import { InterconsultasService } from '../../services/interconsultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-interconsultas',
  templateUrl: './gestion-interconsultas.component.html',
  styleUrls: ['./gestion-interconsultas.component.css']
})
export class GestionInterconsultasComponent implements OnInit {
  handleInterconsultas($event: any) {
    this.listadoInterconsultas=$event;
  }
  listadoInterconsultas: any[] = [];
  constructor(private router:Router,private interconsultasService: InterconsultasService) { }
  ngOnInit(): void {
    this.obtenerInterconsultas();
  }
  obtenerInterconsultas() {
    this.interconsultasService.obtenerInterconsultas().subscribe((i) => {
      this.listadoInterconsultas = i;
    });
  }
  actualizarInterconsultas(id:number){
    this.router.navigate(["/medico/modificar-interconsulta",id]);
  }
  verDetalleInterconsultaa(id:number){
    this.router.navigate(["/detalle-interconsulta",id])
  }
}
