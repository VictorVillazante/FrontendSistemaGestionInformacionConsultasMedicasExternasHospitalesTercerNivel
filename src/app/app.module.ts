import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { MenuPacienteComponent } from './components/menu-paciente/menu-paciente.component';
import { GestionFichasMedicasComponent } from './components/gestion-fichas-medicas/gestion-fichas-medicas.component';
import { MisHistoriasClnicasComponent } from './components/mis-historias-clnicas/mis-historias-clnicas.component';
import { VerMisHistoriasClinicasComponent } from './components/ver-mis-historias-clinicas/ver-mis-historias-clinicas.component';
import { DetalleHistoriaClinicaComponent } from './components/detalle-historia-clinica/detalle-historia-clinica.component';
import { RegistroHistoriaClinicaComponent } from './components/registro-historia-clinica/registro-historia-clinica.component';
import { ActualizacionHistoriaClinicaComponent } from './components/actualizacion-historia-clinica/actualizacion-historia-clinica.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuMedicoComponent } from './menu-medico/menu-medico.component';
import { GestionHistoriasClinicasComponent } from './gestion-historias-clinicas/gestion-historias-clinicas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuPacienteComponent,
    GestionFichasMedicasComponent,
    MisHistoriasClnicasComponent,
    VerMisHistoriasClinicasComponent,
    DetalleHistoriaClinicaComponent,
    RegistroHistoriaClinicaComponent,
    ActualizacionHistoriaClinicaComponent,
    MenuMedicoComponent,
    GestionHistoriasClinicasComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
