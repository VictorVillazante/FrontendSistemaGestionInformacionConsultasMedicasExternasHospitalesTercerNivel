import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PapeletasInternacionService } from 'src/app/services/papeletas-internacion.service';

@Component({
  selector: 'app-mis-papeletas-internacion',
  templateUrl: './mis-papeletas-internacion.component.html',
  styleUrls: ['./mis-papeletas-internacion.component.css']
})
export class MisPapeletasInternacionComponent {
  papeletasInternacion: any[] = [];
  idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
  constructor(private router: Router, private papeletasInternacionService: PapeletasInternacionService) { }
  ngOnInit(): void {
    this.obtenerPapeletasInternacionPaciente();
  }
  obtenerPapeletasInternacionPaciente() {
    this.papeletasInternacionService.obtenerPapeletasInternacionPaciente(this.idPaciente).subscribe((data: any) => {
      this.papeletasInternacion = data;
    });
  }
  handlePapeletasInternacion($event:any){
    this.papeletasInternacion=$event
  }
  verDetallePapeletaInternacion(idPapeletaInternacion:any){
    this.router.navigate(["/detalle-papeleta-internacion",idPapeletaInternacion]);

  }
}
