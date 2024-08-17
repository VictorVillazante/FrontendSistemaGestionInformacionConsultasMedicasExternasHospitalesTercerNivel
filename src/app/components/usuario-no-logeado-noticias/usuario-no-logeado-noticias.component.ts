import { Component, OnInit } from '@angular/core';
import { Comunicado } from 'src/app/models/Comunicado';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-usuario-no-logeado-noticias',
  templateUrl: './usuario-no-logeado-noticias.component.html',
  styleUrls: ['./usuario-no-logeado-noticias.component.css']
})
export class UsuarioNoLogeadoNoticiasComponent implements OnInit {
  listadoComunicados: Comunicado[] = [];
  constructor(private informacionCentroMedicoService:InformacionCentroMedicoService){}
  ngOnInit(){
    this.informacionCentroMedicoService.obtenerComunicados().subscribe(lc=>{
      this.listadoComunicados=lc
    })
  }
}
