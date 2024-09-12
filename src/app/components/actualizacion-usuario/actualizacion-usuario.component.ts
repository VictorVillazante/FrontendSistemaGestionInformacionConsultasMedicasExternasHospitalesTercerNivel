import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-actualizacion-usuario',
  templateUrl: './actualizacion-usuario.component.html',
  styleUrls: ['./actualizacion-usuario.component.css']
})
export class ActualizacionUsuarioComponent {
  formularioUsuario: FormGroup;
  imagenes: string[] = [];
  constructor(private activatedRoute:ActivatedRoute,private alertasService:AlertasService,private usuariosService:UsuariosService,private fb: FormBuilder) {
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
    this.activatedRoute.params.subscribe(params => {
      this.obtenerUsuario(params['id']);
    })
  }
  obtenerUsuario(id: any) {
    this.usuariosService.obtenerUsuario(id).subscribe((data:any)=>{
      this.formularioUsuario.patchValue(data);
    })
  }

  onSubmit(): void {
    if (this.formularioUsuario.valid) {
      this.usuariosService.actualizarUsuario(this.formularioUsuario).subscribe(()=>{
        this.alertasService.mensajeConfirmacion();      
      },(error:any)=>this.alertasService.mensajeError())
    }
  }
  handleImagenes($event: any) {
    this.imagenes = $event;
  }
}