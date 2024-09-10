import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  formularioUsuario: FormGroup;
  imagenes: string[] = [];

  constructor(private alertasService:AlertasService,private usuariosService:UsuariosService,private fb: FormBuilder) {
    this.formularioUsuario = this.fb.group({
      nombres: ['', Validators.required],
      ci: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      grupo_sanguineo: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      estado_civil: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      dias_sancion_peticion_ficha_presencial: ['', [Validators.required, Validators.min(0)]],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.formularioUsuario.valid) {
      this.usuariosService.registrarUsuario(this.formularioUsuario).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}
