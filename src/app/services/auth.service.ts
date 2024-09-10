import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  recuperarContrasenia(recuperarContrasenia: any) {
    let recuperarContraseniaForm=recuperarContrasenia.value;
    return this.http.put<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/auth/nueva-contrasenia`,{
      "ci":recuperarContrasenia.ci,
      "codigoVerficacion":recuperarContrasenia.codigoVerificacion
    });
  }
  recibirCodigoVerificacion(email:string) {
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/v1.0/auth/codigo-verificacion/${email}`);
  }
  logout() {
    localStorage.clear();
    this.roles$.next(null);
  }

  private credentialsKey = 'credentials';
  private userDetails='userDetails';
  private tokenKey = 'token';


  constructor(private http: HttpClient) { }

  roles$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  loginWithCredentials(email: string, password: string): Promise<string> {
    return this.http.post<{ message: string }>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/sign-in`, { email, password })
      .toPromise()
      .then((response: { message: string }) => {
        const token = response?.message ?? '';
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem("email",email);
        return token;
      });
  }

  getUserDetails(token: string): Promise<string[]> {
    console.log(token);
    return this.http.get<any>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/user-details`, { headers: { Authorization: `Bearer ${token}` } })
      .toPromise()
      .then(response => {
        console.log(response??[]);
        localStorage.setItem(this.userDetails,JSON.stringify( response??{} ));
        localStorage.setItem(this.credentialsKey, JSON.stringify({ roles: response.roles??[] }));
        this.roles$.next(response.roles??[]);
        return response.roles??[];
      });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  getRoles(): any {
    let credentials = JSON.parse(localStorage.getItem(this.credentialsKey)??"{roles:[]}");
    return credentials?.roles;
  }
}
