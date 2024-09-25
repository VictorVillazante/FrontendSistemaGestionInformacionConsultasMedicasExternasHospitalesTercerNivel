import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Imagen } from 'src/app/models/Imagen';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  formularioUsuario: FormGroup;
  imagenes: Imagen[] = [];

  constructor(private alertasService:AlertasService,private usuariosService:UsuariosService,private fb: FormBuilder) {
    this.formularioUsuario = this.fb.group({
      nombres: ['', Validators.required],
      ci: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      grupoSanguineo: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      diasSancionPeticionFichaPresencial: ['', [Validators.required, Validators.min(0)]],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.formularioUsuario.valid) {
      this.usuariosService.registrarUsuario(this.formularioUsuario,this.imagenes).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
