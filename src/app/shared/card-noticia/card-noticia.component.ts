import { Component, Input } from '@angular/core';
import { Comunicado } from 'src/app/models/Comunicado';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent {
  @Input() comunicado!:Comunicado;
}
