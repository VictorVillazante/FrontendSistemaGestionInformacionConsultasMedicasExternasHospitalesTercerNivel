import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuPacienteComponent } from "./components/menu-paciente/menu-paciente.component";
import { GestionFichasMedicasComponent } from "./components/gestion-fichas-medicas/gestion-fichas-medicas.component";
import { MisHistoriasClnicasComponent } from "./components/mis-historias-clnicas/mis-historias-clnicas.component";
import { DetalleHistoriaClinicaComponent } from "./components/detalle-historia-clinica/detalle-historia-clinica.component";
import { MenuMedicoComponent } from "./menu-medico/menu-medico.component";
import { GestionHistoriasClinicasComponent } from "./gestion-historias-clinicas/gestion-historias-clinicas.component";
import { ActualizacionHistoriaClinicaComponent } from "./components/actualizacion-historia-clinica/actualizacion-historia-clinica.component";
import { RegistroHistoriaClinicaComponent } from "./components/registro-historia-clinica/registro-historia-clinica.component";
import { AuthGuard } from "./components/guard/app.auth";

const APP_ROUTES: Routes = [ 
    { path: '', component:  HomeComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'paciente/menu', component:  MenuPacienteComponent},
    { path: 'paciente/gestion-ficha-medica', component:  GestionFichasMedicasComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},
    { path: 'paciente/ver-mis-historias-clinicas', component:  MisHistoriasClnicasComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},
    { path: 'paciente/detalle-historia-clinica/:id', component:  DetalleHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},

    { path: 'medico/menu', component:  MenuMedicoComponent},
    { path: 'medico/gestion-historias-clinicas', component:  GestionHistoriasClinicasComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},
    { path: 'medico/modificar-historia-clinica/:id', component:  ActualizacionHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},
    { path: 'medico/registro-historia-clinica', component:  RegistroHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});