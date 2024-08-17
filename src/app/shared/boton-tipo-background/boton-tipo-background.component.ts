import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-tipo-background',
  templateUrl: './boton-tipo-background.component.html',
  styleUrls: ['./boton-tipo-background.component.css']
})
export class BotonTipoBackgroundComponent {
  @Input() ruta:string="";
  @Input() titulo:string="";
  @Input() clase:string="";

  constructor(private route:Router){}
  cambiarRutaVista(){
   this.route.navigate([this.ruta]);
  }
}
