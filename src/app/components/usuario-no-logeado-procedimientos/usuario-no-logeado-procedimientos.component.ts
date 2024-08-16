import { Component, Input } from '@angular/core';
import { PasoProcedimiento } from 'src/app/models/PasoProcedimiento';

@Component({
  selector: 'app-usuario-no-logeado-procedimientos',
  templateUrl: './usuario-no-logeado-procedimientos.component.html',
  styleUrls: ['./usuario-no-logeado-procedimientos.component.css']
})
export class UsuarioNoLogeadoProcedimientosComponent {
  @Input() listadoProcedimientoPasos:PasoProcedimiento[]=[];
}
