import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CertificadosMedicosDataDev } from '../../assets/data-dev/certificados-medicos';

@Injectable({
  providedIn: 'root'
})
export class CertificadosMedicosService {
  obtenerCertificadosMedicosPaciente(idPaciente: any) {
    return of(this.listadoCertificadosMedicos.filter(certificadoMedico=>certificadoMedico.idPaciente=idPaciente));
  }
  listadoCertificadosMedicos:any[]=CertificadosMedicosDataDev.listaadoCertificadosMedicos;
  obtenerCertificadosMedicos() {
    return of(this.listadoCertificadosMedicos)
  }

  constructor(private http:HttpClient) { }
}
