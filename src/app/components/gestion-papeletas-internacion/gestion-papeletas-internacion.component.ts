import { Component, OnInit } from '@angular/core';
import { CertificadosMedicosService } from '../../services/certificados-medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-papeletas-internacion',
  templateUrl: './gestion-papeletas-internacion.component.html',
  styleUrls: ['./gestion-papeletas-internacion.component.css']
})
export class GestionPapeletasInternacionComponent implements OnInit {
  listadoPapeletasInternacion: any[] = [];
  constructor(private router:Router,private certificadosMedicosService: CertificadosMedicosService) { }
  handlePapeletasInternacion($event: any) {
    this.listadoPapeletasInternacion = $event;
  }
  ngOnInit(): void {
    this.certificadosMedicosService.obtenerCertificadosMedicos().subscribe((pi) => {
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
