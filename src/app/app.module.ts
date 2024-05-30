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
import { GestionRecetasComponent } from './components/gestion-recetas/gestion-recetas.component';
import { GestionNotasReferenciaComponent } from './components/gestion-notas-referencia/gestion-notas-referencia.component';
import { GestionMedicosComponent } from './components/gestion-medicos/gestion-medicos.component';
import { RegistroMedicoComponent } from './components/registro-medico/registro-medico.component';
import { RegistroNotaReferenciaComponent } from './components/registro-nota-referencia/registro-nota-referencia.component';
import { DetalleNotaReferenciaComponent } from './components/detalle-nota-referencia/detalle-nota-referencia.component';
import { ActualizacionNotaReferenciaComponent } from './components/actualizacion-nota-referencia/actualizacion-nota-referencia.component';
import { RegistroRecetaComponent } from './components/registro-receta/registro-receta.component';
import { ActualizacionRecetaComponent } from './components/actualizacion-receta/actualizacion-receta.component';
import { DetalleRecetaComponent } from './components/detalle-receta/detalle-receta.component';
import { GestionTurnosAtencionMedicaComponent } from './components/gestion-turnos-atencion-medica/gestion-turnos-atencion-medica.component';
import { MisRecetasComponent } from './components/mis-recetas/mis-recetas.component';
import { MisNotasReferenciaComponent } from './components/mis-notas-referencia/mis-notas-referencia.component';
import { GestionNotasEvolucionComponent } from './components/gestion-notas-evolucion/gestion-notas-evolucion.component';
import { ActualizacionNotaEvolucionComponent } from './components/actualizacion-nota-evolucion/actualizacion-nota-evolucion.component';
import { RegistroNotaEvolucionComponent } from './components/registro-nota-evolucion/registro-nota-evolucion.component';
import { DetalleNotaEvolucionComponent } from './components/detalle-nota-evolucion/detalle-nota-evolucion.component';
import { ActualizacionMedicoComponent } from './components/actualizacion-medico/actualizacion-medico.component';
import { ActualizacionPacienteComponent } from './components/actualizacion-paciente/actualizacion-paciente.component';
import { MisNotasEvolucionComponent } from './components/mis-notas-evolucion/mis-notas-evolucion.component';
import { RegistroTurnoAtencionComponent } from './components/registro-turno-atencion/registro-turno-atencion.component';
import { ActualizacionTurnoAtencionComponent } from './components/actualizacion-turno-atencion/actualizacion-turno-atencion.component';
import { MisConsultasMedicasComponent } from './components/mis-consultas-medicas/mis-consultas-medicas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GestionFichasMedicasComponent,
    MisHistoriasClnicasComponent,
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
    GestionRecetasComponent,
    GestionNotasReferenciaComponent,
    GestionMedicosComponent,
    RegistroMedicoComponent,
    RegistroNotaReferenciaComponent,
    DetalleNotaReferenciaComponent,
    ActualizacionNotaReferenciaComponent,
    RegistroRecetaComponent,
    ActualizacionRecetaComponent,
    DetalleRecetaComponent,
    GestionTurnosAtencionMedicaComponent,
    MisRecetasComponent,
    MisNotasReferenciaComponent,
    GestionNotasEvolucionComponent,
    ActualizacionNotaEvolucionComponent,
    RegistroNotaEvolucionComponent,
    DetalleNotaEvolucionComponent,
    ActualizacionMedicoComponent,
    ActualizacionPacienteComponent,
    MisNotasEvolucionComponent,
    RegistroTurnoAtencionComponent,
    ActualizacionTurnoAtencionComponent,
    MisConsultasMedicasComponent,
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
