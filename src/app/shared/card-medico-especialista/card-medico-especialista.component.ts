import { Component, Input } from '@angular/core';
import { MedicoEspecialista } from '../../models/MedicoEspecialista';

@Component({
  selector: 'app-card-medico-especialista',
  templateUrl: './card-medico-especialista.component.html',
  styleUrls: ['./card-medico-especialista.component.css']
})
export class CardMedicoEspecialistaComponent {
  @Input() medicoEspecialista!:MedicoEspecialista;
}
