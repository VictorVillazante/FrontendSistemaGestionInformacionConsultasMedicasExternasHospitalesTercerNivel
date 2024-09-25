import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertasService } from '../../services/alertas.service';
import { Usuario } from '../../models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Imagen } from 'src/app/models/Imagen';

@Component({
  selector: 'app-formulario-detalle-usuario',
  templateUrl: './formulario-detalle-usuario.component.html',
  styleUrls: ['./formulario-detalle-usuario.component.css']
})
export class FormularioDetalleUsuarioComponent {
  @Input() formularioUsuario!: FormGroup;
  @Input() onSubmit!: ()=>void;
  @Input() imagenes!: Imagen[];
  @Output() imagenesEvent = new EventEmitter<any>();
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
  constructor(private alertasService:AlertasService,private usuariosService:UsuariosService){}
}
