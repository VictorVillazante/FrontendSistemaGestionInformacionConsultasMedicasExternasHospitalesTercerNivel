import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificadosMedicosService } from 'src/app/services/certificados-medicos.service';

@Component({
  selector: 'app-mis-certificados-medicos',
  templateUrl: './mis-certificados-medicos.component.html',
  styleUrls: ['./mis-certificados-medicos.component.css']
})
export class MisCertificadosMedicosComponent implements OnInit{
  certificadosMedicos: any[] = [];
  idPaciente:any=1;
  constructor(private router: Router, private certificadosMedicosService: CertificadosMedicosService) { 
    this.idPaciente = JSON.parse(localStorage.getItem("userDetails") ?? "{}").idPaciente;
    this.obtenerCertificadosMedicosPaciente(this.idPaciente);
  }
  ngOnInit(): void {
  }
  obtenerCertificadosMedicosPaciente(idPaciente:any) {
    this.certificadosMedicosService.obtenerCertificadosMedicosPaciente(idPaciente).subscribe((data: any) => {
      this.certificadosMedicos = data;
    });
  }
  handleCertificadosMedicos($event:any){
    this.certificadosMedicos=$event
  }
  verDetalleCertificadoMedico(idCertificadoMedico:any){
    this.router.navigate(["/detalle-certificado-medico",idCertificadoMedico]);

  }
}
