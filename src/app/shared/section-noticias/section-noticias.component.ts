import { Component, OnInit } from '@angular/core';
import { Comunicado } from 'src/app/models/Comunicado';
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
  listadoComunicados: Comunicado[] = [];
  constructor(private scriptsService: ScriptsService,private informacionCentroMedicoService:InformacionCentroMedicoService) {
  }
  ngOnInit(): void {
    this.informacionCentroMedicoService.obtenerNoticiasRecientes().subscribe(noticias=>{
      this.listadoComunicados=noticias;
    })
  }
  ngAfterViewInit(): void {
    this.scriptsService.cargarCarousel(this.id);
  }
}
