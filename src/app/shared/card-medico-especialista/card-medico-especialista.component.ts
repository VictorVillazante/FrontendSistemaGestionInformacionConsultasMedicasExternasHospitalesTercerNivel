import { Component, Input } from '@angular/core';
import { MedicoEspecialista } from '../../models/MedicoEspecialista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-medico-especialista',
  templateUrl: './card-medico-especialista.component.html',
  styleUrls: ['./card-medico-especialista.component.css']
})
export class CardMedicoEspecialistaComponent {
  irRutaDetalleMedico(id: number) {
    this.router.navigate(["descripcion-medico",id])
  }
  @Input() medicoEspecialista!:MedicoEspecialista;
  constructor(private router:Router){}
}
