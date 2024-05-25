import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  estaLogeado:boolean=false;
  roles:any[]=[];
  
  constructor(private authService: AuthService,private router:Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate([''])
  }
  ngOnInit() {
    this.authService.roles$.subscribe((roles: any) => {
      console.log("paso algo con roles$ "+roles);
      if(roles!=null){
        this.roles=roles;
      }else{
        this.roles=roles;
      }
    });
  }
}
