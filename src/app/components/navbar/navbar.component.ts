import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from '../guard/app.auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  estaLogeado:boolean=false;
  roles:any[]=[];
  
  constructor(private authGuard:AuthGuard,private authService: AuthService,private router:Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate([''])
    this.estaLogeado=false;
  }
  ngOnInit() {
    const token = this.authService.getToken();
    console.log("Token navbar"+token);
    if(token){
      this.estaLogeado=true
    }else{
      this.estaLogeado=false;
    }
    this.authService.roles$.subscribe((roles: any) => {
      console.log("paso algo con roles$ "+roles);
      if(roles){
        this.roles=roles;
      }else{
        this.roles=roles;
      }
    });
  }
}
