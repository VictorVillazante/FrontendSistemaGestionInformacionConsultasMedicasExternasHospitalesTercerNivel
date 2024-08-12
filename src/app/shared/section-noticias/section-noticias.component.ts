import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia';
import { ScriptsService } from 'src/app/services/scripts.service';
import { v4 as uuidv4 } from 'uuid';
import { InformacionCentroMedicoService } from '../../services/informacion-centro-medico.service';

@Component({
  selector: 'app-section-noticias',
  templateUrl: './section-noticias.component.html',
  styleUrls: ['./section-noticias.component.css']
})
export class SectionNoticiasComponent implements OnInit{
  id: string = uuidv4().replace(/-/g, '');
  listadoNoticias: Noticia[] = [];
  constructor(private scriptsService: ScriptsService,private informacionCentroMedicoService:InformacionCentroMedicoService) {
  }
  ngOnInit(): void {
    this.informacionCentroMedicoService.obtenerNoticias().subscribe(noticias=>{
      this.listadoNoticias=noticias;
    })
  }
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
}
