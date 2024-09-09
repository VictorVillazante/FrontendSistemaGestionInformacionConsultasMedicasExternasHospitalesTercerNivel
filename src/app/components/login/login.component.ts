import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      const token = await this.authService.loginWithCredentials(email, password);
      const roles = await this.authService.getUserDetails(token);
      console.log('Token:', token);
      console.log('Roles:', roles);

      if (roles.length > 0) {
        window.location.href = '/menu';
        // this.router.navigate(['/menu'], { skipLocationChange: true }).then(() => {
        //   window.location.href = '/menu';
        // });;
      } else {
        // Manejar el caso donde no se obtuvieron roles
        console.error('No se obtuvieron roles para el usuario.');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
    }
  }
  redireccionarRecuperarConstrasenia() {
    this.router.navigate(["recuperar-contrasenia"]);
  }
}
