import { Component, OnInit } from '@angular/core';
import { CertificadosMedicosService } from '../../services/certificados-medicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-certificados-medicos',
  templateUrl: './gestion-certificados-medicos.component.html',
  styleUrls: ['./gestion-certificados-medicos.component.css']
})
export class GestionCertificadosMedicosComponent implements OnInit{
  listaCertificadosMedico:any[]=[];
  constructor(private certificadosMedicosService:CertificadosMedicosService,private router:Router){}
  ngOnInit(): void {
      this.certificadosMedicosService.obtenerCertificadosMedicos().subscribe((cm)=>{
        this.listaCertificadosMedico=cm;
      });
  }
  actualizarCertificadoMedico(id:number){
    this.router.navigate(["medico/modificar-certificado-medico/"+id]);
  }
  detalleCertificadoMedico(id:number){
    this.router.navigate(["detalle-certificado-medico/"+id])
  }
  handleCertificadoMedico($event:any){
    this.listaCertificadosMedico=$event;
  }
}
