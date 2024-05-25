import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrlEnviroment } from 'src/enviroments/api-url-enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }

  private credentialsKey = 'credentials';
  private tokenKey = 'token';


  constructor(private http: HttpClient) { }
  roles$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  loginWithCredentials(email: string, password: string): Promise<string> {
    return this.http.post<{ message: string }>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/sign-in`, { email, password })
      .toPromise()
      .then((response: { message: string }) => {
        const token = response?.message ?? '';
        localStorage.setItem(this.tokenKey, token);
        return token;
      });
  }

  getUserRoles(token: string): Promise<string[]> {
    console.log(token);
    return this.http.get<string[]>(`${apiUrlEnviroment.apiUrl}/api/microservicio-gestion-usuarios/auth/user-details`, { headers: { Authorization: `Bearer ${token}` } })
      .toPromise()
      .then(response => {
        console.log(response??[]);
        localStorage.setItem(this.credentialsKey, JSON.stringify({ roles: response??[] }));
        this.roles$.next(response??[]);
        return response??[];
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
