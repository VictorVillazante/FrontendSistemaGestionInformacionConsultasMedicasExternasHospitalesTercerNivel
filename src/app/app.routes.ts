import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuPacienteComponent } from "./components/menu-paciente/menu-paciente.component";
import { GestionFichasMedicasComponent } from "./components/gestion-fichas-medicas/gestion-fichas-medicas.component";
const APP_ROUTES: Routes = [ 
    { path: '', component:  HomeComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'paciente/menu', component:  MenuPacienteComponent},
    { path: 'paciente/gestion-ficha-medica', component:  GestionFichasMedicasComponent},
    { path: '**', component:  HomeComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});