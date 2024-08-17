import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';
import { Comunicado } from '../../models/Comunicado';

@Component({
  selector: 'app-usuario-no-logeado-detalle-noticia',
  templateUrl: './usuario-no-logeado-detalle-noticia.component.html',
  styleUrls: ['./usuario-no-logeado-detalle-noticia.component.css']
})
export class UsuarioNoLogeadoDetalleNoticiaComponent implements OnInit {
  idNoticia: number = 0;
  noticia!:Comunicado;
  constructor(private activatedRoute: ActivatedRoute, private informacionCentroMedicoService: InformacionCentroMedicoService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idNoticia = params["id"];
      this.obtenerNoticia(this.idNoticia);
    })
  }
  obtenerNoticia(id:number){
    this.informacionCentroMedicoService.obtenerComunicado(this.idNoticia).subscribe((noticia) => {
      this.noticia=noticia;
    })
  }
}
