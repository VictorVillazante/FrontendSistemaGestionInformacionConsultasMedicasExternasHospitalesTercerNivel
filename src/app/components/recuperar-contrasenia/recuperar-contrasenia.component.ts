import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../../services/alertas.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent {

  emailRecuperacionForm: FormGroup;
  recuperarContraseniaForm: FormGroup;

  constructor(private fb: FormBuilder, private alertasService: AlertasService, private authService: AuthService) {
    this.emailRecuperacionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.recuperarContraseniaForm=this.fb.group({
      ci:['', [Validators.required, Validators.pattern('^[A-Z0-9]+$')]],
      codigoVerificacion:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  recibirCodigoVerificacion() {
    this.authService.recibirCodigoVerificacion(this.emailRecuperacionForm.value.email).subscribe((resp) => {
      this.alertasService.mensajeConfirmacion("Codigo de verificacion enviado a su email");
    },
      (error: any) => {
        this.alertasService.mensajeError("Error al enviar codigo de verificacion");
      }
    )
  }
  recuperarContrasenia() {
    this.authService.recuperarContrasenia(this.recuperarContrasenia).subscribe((resp)=>{
      this.alertasService.mensajeConfirmacion("Nueva contraseña enviada a su email");
    },(error:any)=>{
      this.alertasService.mensajeError("Error al enviar nueva contraseña")
    });
  }
}
