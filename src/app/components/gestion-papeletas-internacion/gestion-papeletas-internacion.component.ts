import { Component, OnInit } from '@angular/core';
import { CertificadosMedicosService } from '../../services/certificados-medicos.service';
import { Router } from '@angular/router';
import { PapeletasInternacionService } from 'src/app/services/papeletas-internacion.service';

@Component({
  selector: 'app-gestion-papeletas-internacion',
  templateUrl: './gestion-papeletas-internacion.component.html',
  styleUrls: ['./gestion-papeletas-internacion.component.css']
})
export class GestionPapeletasInternacionComponent implements OnInit {
  listadoPapeletasInternacion: any[] = [];
  constructor(private router:Router,private papeletasInternacionService: PapeletasInternacionService) { }
  handlePapeletasInternacion($event: any) {
    this.listadoPapeletasInternacion = $event;
  }
  ngOnInit(): void {
    this.papeletasInternacionService.obtenerPapeletasInternacion().subscribe((pi) => {
      this.listadoPapeletasInternacion = pi;
    })
  }
  actualizarPapeletaInternacion(id:number){
    this.router.navigate(["medico/modificar-papeleta-internacion",id]);
  }
  verDetallePapeletaInternacion(id:number){
    this.router.navigate(["medico/modificar-papeleta-internacion",id]);
  }
}
