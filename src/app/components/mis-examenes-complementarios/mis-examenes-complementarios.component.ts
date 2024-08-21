import { Component, OnInit } from '@angular/core';
import { ExamenesComplementariosService } from '../../services/examenes-complementarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-examenes-complementarios',
  templateUrl: './mis-examenes-complementarios.component.html',
  styleUrls: ['./mis-examenes-complementarios.component.css']
})
export class MisExamenesComplementariosComponent implements OnInit {
  examenesComplementarios:any[]=[];
  idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
  constructor(private router: Router, private examenesComplementariosService: ExamenesComplementariosService) { }
  ngOnInit(): void {
    this.obtenerExamenesComplementariosPaciente();
  }
  obtenerExamenesComplementariosPaciente() {
    this.examenesComplementariosService.obtenerExamenesComplementariosPaciente(this.idPaciente).subscribe((data: any) => {
      this.examenesComplementarios = data;
    });
  }
  handleInterconsultas($event:any){
    this.examenesComplementarios=$event
  }
  verDetalleExamenComplementario(idExamenComplementario:any){
    this.router.navigate(["/detalle-examen-complementario",idExamenComplementario]);

  }
}
