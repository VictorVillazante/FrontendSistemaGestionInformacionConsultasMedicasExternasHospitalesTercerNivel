import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/models/Noticia';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent {
  @Input() noticia!:Noticia;
}
