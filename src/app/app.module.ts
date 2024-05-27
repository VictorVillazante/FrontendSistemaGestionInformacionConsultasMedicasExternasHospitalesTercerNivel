import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { GestionFichasMedicasComponent } from './components/gestion-fichas-medicas/gestion-fichas-medicas.component';
import { MisHistoriasClnicasComponent } from './components/mis-historias-clnicas/mis-historias-clnicas.component';
import { VerMisHistoriasClinicasComponent } from './components/ver-mis-historias-clinicas/ver-mis-historias-clinicas.component';
import { DetalleHistoriaClinicaComponent } from './components/detalle-historia-clinica/detalle-historia-clinica.component';
import { RegistroHistoriaClinicaComponent } from './components/registro-historia-clinica/registro-historia-clinica.component';
import { ActualizacionHistoriaClinicaComponent } from './components/actualizacion-historia-clinica/actualizacion-historia-clinica.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionHistoriasClinicasComponent } from './components/gestion-historias-clinicas/gestion-historias-clinicas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroFichaMedicaComponent } from './components/registro-ficha-medica/registro-ficha-medica.component';
import { DetalleFichaMedicaComponent } from './components/detalle-ficha-medica/detalle-ficha-medica.component';
import { GestionPacientesComponent } from './components/gestion-pacientes/gestion-pacientes.component';
import { RegistroPacienteComponent } from './components/registro-paciente/registro-paciente.component';
import { GestionHorariosAtencionComponent } from './components/gestion-horarios-atencion/gestion-horarios-atencion.component';
import { GestionRecetasComponent } from './components/gestion-recetas/gestion-recetas.component';
import { GestionNotasReferenciaComponent } from './components/gestion-notas-referencia/gestion-notas-referencia.component';
import { VerMisRecetasComponent } from './components/ver-mis-recetas/ver-mis-recetas.component';
import { VerMisNotasReferenciaComponent } from './components/ver-mis-notas-referencia/ver-mis-notas-referencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GestionFichasMedicasComponent,
    MisHistoriasClnicasComponent,
    VerMisHistoriasClinicasComponent,
    DetalleHistoriaClinicaComponent,
    RegistroHistoriaClinicaComponent,
    ActualizacionHistoriaClinicaComponent,
    GestionHistoriasClinicasComponent,
    NavbarComponent,
    MenuComponent,
    RegistroFichaMedicaComponent,
    DetalleFichaMedicaComponent,
    GestionPacientesComponent,
    RegistroPacienteComponent,
    GestionHorariosAtencionComponent,
    GestionRecetasComponent,
    GestionNotasReferenciaComponent,
    VerMisRecetasComponent,
    VerMisNotasReferenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
