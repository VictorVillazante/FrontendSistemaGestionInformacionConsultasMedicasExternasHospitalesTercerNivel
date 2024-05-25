import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    roles: any[] = [];
    constructor(private authService: AuthService, private router: Router) {
    }

    async canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any> {
        try {
            const token = this.authService.getToken();
      
            if (token) {
              const roles = this.authService.getRoles();
      
              const rolesRequeridos = next.data['roles'];
              console.log(next);
              console.log(rolesRequeridos);
              
              const tienePermiso = roles && rolesRequeridos.some((rolRequerido: string) => roles.includes(rolRequerido));              
              console.log(roles);
              console.log(tienePermiso);
              console.log(token);
              if (tienePermiso) {
                return true;
              } else {
                this.router.navigate(['/login']);
                return false;
              }
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          } catch (e) {
            console.log(e);
            this.router.navigate(['/login']);
            return false;
          }


    }
}