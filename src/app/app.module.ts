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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuPacienteComponent,
    GestionFichasMedicasComponent,
    MisHistoriasClnicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
