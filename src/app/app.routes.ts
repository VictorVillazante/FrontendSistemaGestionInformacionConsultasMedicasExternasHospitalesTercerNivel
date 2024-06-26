import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { GestionFichasMedicasComponent } from "./components/gestion-fichas-medicas/gestion-fichas-medicas.component";
import { MisHistoriasClnicasComponent } from "./components/mis-historias-clnicas/mis-historias-clnicas.component";
import { DetalleHistoriaClinicaComponent } from "./components/detalle-historia-clinica/detalle-historia-clinica.component";
import { GestionHistoriasClinicasComponent } from "./components/gestion-historias-clinicas/gestion-historias-clinicas.component";
import { ActualizacionHistoriaClinicaComponent } from "./components/actualizacion-historia-clinica/actualizacion-historia-clinica.component";
import { RegistroHistoriaClinicaComponent } from "./components/registro-historia-clinica/registro-historia-clinica.component";
import { AuthGuard } from "./components/guard/app.auth";
import { MenuComponent } from "./components/menu/menu.component";
import { RegistroFichaMedicaComponent } from "./components/registro-ficha-medica/registro-ficha-medica.component";
import { DetalleFichaMedicaComponent } from "./components/detalle-ficha-medica/detalle-ficha-medica.component";
import { GestionPacientesComponent } from "./components/gestion-pacientes/gestion-pacientes.component";
import { GestionMedicosComponent } from "./components/gestion-medicos/gestion-medicos.component";
import { RegistroMedicoComponent } from "./components/registro-medico/registro-medico.component";
import { RegistroPacienteComponent } from "./components/registro-paciente/registro-paciente.component";
import { DetalleNotaReferenciaComponent } from "./components/detalle-nota-referencia/detalle-nota-referencia.component";
import { GestionNotasReferenciaComponent } from "./components/gestion-notas-referencia/gestion-notas-referencia.component";
import { RegistroNotaReferenciaComponent } from "./components/registro-nota-referencia/registro-nota-referencia.component";
import { ActualizacionNotaReferenciaComponent } from "./components/actualizacion-nota-referencia/actualizacion-nota-referencia.component";
import { GestionRecetasComponent } from "./components/gestion-recetas/gestion-recetas.component";
import { RegistroRecetaComponent } from "./components/registro-receta/registro-receta.component";
import { DetalleRecetaComponent } from "./components/detalle-receta/detalle-receta.component";
import { MisRecetasComponent } from "./components/mis-recetas/mis-recetas.component";
import { MisNotasReferenciaComponent } from "./components/mis-notas-referencia/mis-notas-referencia.component";
import { GestionTurnosAtencionMedicaComponent } from "./components/gestion-turnos-atencion-medica/gestion-turnos-atencion-medica.component";
import { DetalleNotaEvolucionComponent } from "./components/detalle-nota-evolucion/detalle-nota-evolucion.component";
import { GestionNotasEvolucionComponent } from "./components/gestion-notas-evolucion/gestion-notas-evolucion.component";
import { RegistroNotaEvolucionComponent } from "./components/registro-nota-evolucion/registro-nota-evolucion.component";
import { ActualizacionNotaEvolucionComponent } from "./components/actualizacion-nota-evolucion/actualizacion-nota-evolucion.component";
import { ActualizacionMedicoComponent } from "./components/actualizacion-medico/actualizacion-medico.component";
import { RegistroTurnoAtencionComponent } from "./components/registro-turno-atencion/registro-turno-atencion.component";
import { ActualizacionTurnoAtencionComponent } from "./components/actualizacion-turno-atencion/actualizacion-turno-atencion.component";
import { MisNotasEvolucionComponent } from "./components/mis-notas-evolucion/mis-notas-evolucion.component";
import { MisConsultasMedicasComponent } from "./components/mis-consultas-medicas/mis-consultas-medicas.component";
import { ActualizacionPacienteComponent } from "./components/actualizacion-paciente/actualizacion-paciente.component";
import { UsuarioNoLogeadoHorariosAtencionComponent } from "./components/usuario-no-logeado-horarios-atencion/usuario-no-logeado-horarios-atencion.component";

const APP_ROUTES: Routes = [ 
    { path: '', component:  HomeComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'horarios-atencion', component:  UsuarioNoLogeadoHorariosAtencionComponent},

    // { path: 'menu', component:  MenuComponent},


    // { path: 'paciente/menu', component:  MenuPacienteComponent},
    // { path: 'paciente/ver-mis-historias-clinicas', component:  MisHistoriasClnicasComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},
    // { path: 'paciente/detalle-historia-clinica/:id', component:  DetalleHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE','MEDICO']}},
    // { path: 'paciente/gestion-ficha-medica', component:  GestionFichasMedicasComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},
    // { path: 'paciente/registro-ficha-medica', component:  RegistroFichaMedicaComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},
    // { path: 'paciente/detalle-ficha-medica/:id', component:  DetalleFichaMedicaComponent,canActivate: [AuthGuard],data:{roles:['PACIENTE']}},




    // { path: 'medico/menu', component:  MenuMedicoComponent},
    // { path: 'medico/gestion-historias-clinicas', component:  GestionHistoriasClinicasComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},
    // { path: 'medico/modificar-historia-clinica/:id', component:  ActualizacionHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},
    // { path: 'medico/registro-historia-clinica', component:  RegistroHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['MEDICO']}},

    // { path: 'administrador/gestion-pacientes', component:  RegistroHistoriaClinicaComponent,canActivate: [AuthGuard],data:{roles:['ADMINISTRADOR']}},


    { path: 'menu', component:  MenuComponent},

    { path: 'detalle-historia-clinica/:id', component:  DetalleHistoriaClinicaComponent},
    { path: 'detalle-nota-referencia/:id', component:  DetalleNotaReferenciaComponent},
    { path: 'detalle-receta/:id', component:  DetalleRecetaComponent},
    { path: 'detalle-nota-evolucion/:id', component:  DetalleNotaEvolucionComponent},



    { path: 'paciente/ver-mis-historias-clinicas', component:  MisHistoriasClnicasComponent},
    { path: 'paciente/ver-mis-recetas', component:  MisRecetasComponent},
    { path: 'paciente/ver-mis-notas-referencia', component:  MisNotasReferenciaComponent},
    { path: 'paciente/ver-mis-notas-evolucion', component:  MisNotasEvolucionComponent},


    { path: 'paciente/gestion-ficha-medica', component:  GestionFichasMedicasComponent,},
    { path: 'paciente/registro-ficha-medica', component:  RegistroFichaMedicaComponent,},
    { path: 'paciente/detalle-ficha-medica/:id', component:  DetalleFichaMedicaComponent},



    { path: 'medico/gestion-historias-clinicas', component:  GestionHistoriasClinicasComponent},
    { path: 'medico/registro-historia-clinica', component:  RegistroHistoriaClinicaComponent},
    { path: 'medico/modificar-historia-clinica/:id', component:  ActualizacionHistoriaClinicaComponent},

   
    { path: 'medico/gestion-notas-referencia', component:  GestionNotasReferenciaComponent},
    { path: 'medico/registro-nota-referencia', component:  RegistroNotaReferenciaComponent},
    { path: 'medico/modificar-nota-referencia/:id', component:  ActualizacionNotaReferenciaComponent},

       
    { path: 'medico/gestion-recetas', component:  GestionRecetasComponent},
    { path: 'medico/registro-receta', component:  RegistroRecetaComponent},
    { path: 'medico/modificar-receta/:id', component:  ActualizacionNotaReferenciaComponent},

    { path: 'medico/gestion-notas-evolucion', component:  GestionNotasEvolucionComponent},
    { path: 'medico/registro-nota-evolucion', component:  RegistroNotaEvolucionComponent},
    { path: 'medico/modificar-nota-evolucion/:id', component:  ActualizacionNotaEvolucionComponent},




    { path: 'administrador/gestion-pacientes', component:  GestionPacientesComponent},
    { path: 'administrador/registro-paciente', component:  RegistroPacienteComponent},
    { path: 'administrador/modificar-paciente/:id', component:  ActualizacionPacienteComponent},
    { path: 'administrador/gestion-medicos', component:  GestionMedicosComponent},
    { path: 'administrador/registro-medico', component:  RegistroMedicoComponent},
    { path: 'administrador/modificar-medico/:id', component:  ActualizacionMedicoComponent},
    { path: 'administrador/gestion-turnos-atencion', component:  GestionTurnosAtencionMedicaComponent},
    { path: 'administrador/registro-turno-atencion', component:  RegistroTurnoAtencionComponent},
    { path: 'administrador/modificar-turno-atencion/:id', component:  ActualizacionTurnoAtencionComponent},
    { path: 'medico/ver-mis-consultas-medicas', component:  MisConsultasMedicasComponent},





];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});