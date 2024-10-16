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
import { RegistroTurnoAtencionComponent } from "./components/registro-turno-atencion/registro-turno-atencion.component";
import { ActualizacionTurnoAtencionComponent } from "./components/actualizacion-turno-atencion/actualizacion-turno-atencion.component";
import { MisNotasEvolucionComponent } from "./components/mis-notas-evolucion/mis-notas-evolucion.component";
import { MisConsultasMedicasComponent } from "./components/mis-consultas-medicas/mis-consultas-medicas.component";
import { UsuarioNoLogeadoHorariosAtencionComponent } from "./components/usuario-no-logeado-horarios-atencion/usuario-no-logeado-horarios-atencion.component";
import { UsuarioNoLogeadoEspecialidadedesComponent } from "./components/usuario-no-logeado-especialidadedes/usuario-no-logeado-especialidadedes.component";
import { UsuarioNoLogeadoMedicosEspecialistasComponent } from "./components/usuario-no-logeado-medicos-especialistas/usuario-no-logeado-medicos-especialistas.component";
import { UsuarioNoLogeadoRequisitosComponent } from "./components/usuario-no-logeado-requisitos/usuario-no-logeado-requisitos.component";
import { UsuarioNoLogeadoProcedimientosComponent } from "./components/usuario-no-logeado-procedimientos/usuario-no-logeado-procedimientos.component";
import { UsuarioNoLogeadoProcesoInscripcionComponent } from "./components/usuario-no-logeado-proceso-inscripcion/usuario-no-logeado-proceso-inscripcion.component";
import { UsuarioNoLogeadoNoticiasComponent } from "./components/usuario-no-logeado-noticias/usuario-no-logeado-noticias.component";
import { UsuarioNoLogeadoDetalleNoticiaComponent } from "./components/usuario-no-logeado-detalle-noticia/usuario-no-logeado-detalle-noticia.component";
import { UsuarioNoLogeadoDescripcionMedicosComponent } from "./components/usuario-no-logeado-descripcion-medicos/usuario-no-logeado-descripcion-medicos.component";
import { UsuarioNoLogeadoEspeciaildadMedicaComponent } from "./components/usuario-no-logeado-especiaildad-medica/usuario-no-logeado-especiaildad-medica.component";
import { GestionCertificadosMedicosComponent } from "./components/gestion-certificados-medicos/gestion-certificados-medicos.component";
import { GestionExamenesComplementariosComponent } from "./components/gestion-examenes-complementarios/gestion-examenes-complementarios.component";
import { GestionInterconsultasComponent } from "./components/gestion-interconsultas/gestion-interconsultas.component";
import { GestionPapeletasInternacionComponent } from "./components/gestion-papeletas-internacion/gestion-papeletas-internacion.component";
import { RegistroCertificadoMedicoComponent } from "./components/registro-certificado-medico/registro-certificado-medico.component";
import { ActualizacionCertificadoMedicoComponent } from "./components/actualizacion-certificado-medico/actualizacion-certificado-medico.component";
import { DetalleCertificadoMedicoComponent } from "./components/detalle-certificado-medico/detalle-certificado-medico.component";
import { RegistroExamenComplementarioComponent } from "./components/registro-examen-complementario/registro-examen-complementario.component";
import { ActualizacionExamenComplementarioComponent } from "./components/actualizacion-examen-complementario/actualizacion-examen-complementario.component";
import { RegistroInterconsultaComponent } from "./components/registro-interconsulta/registro-interconsulta.component";
import { ActualizacionInterconsultaComponent } from "./components/actualizacion-interconsulta/actualizacion-interconsulta.component";
import { RegistroPapeletaInternacionComponent } from "./components/registro-papeleta-internacion/registro-papeleta-internacion.component";
import { ActualizacionPapeletaInternacionComponent } from "./components/actualizacion-papeleta-internacion/actualizacion-papeleta-internacion.component";
import { DetalleExamenComplementarioComponent } from "./components/detalle-examen-complementario/detalle-examen-complementario.component";
import { DetalleInterconsultaComponent } from "./components/detalle-interconsulta/detalle-interconsulta.component";
import { DetallePapeletaInternacionComponent } from "./components/detalle-papeleta-internacion/detalle-papeleta-internacion.component";
import { MisCertificadosMedicosComponent } from "./components/mis-certificados-medicos/mis-certificados-medicos.component";
import { MisExamenesComplementariosComponent } from "./components/mis-examenes-complementarios/mis-examenes-complementarios.component";
import { MisSolicitudesInterconsultaComponent } from './components/mis-solicitudes-interconsulta/mis-solicitudes-interconsulta.component';
import { MisPapeletasInternacionComponent } from "./components/mis-papeletas-internacion/mis-papeletas-internacion.component";
import { RecuperarContraseniaComponent } from "./components/recuperar-contrasenia/recuperar-contrasenia.component";
import { RegistroEspecialidadComponent } from "./components/registro-especialidad/registro-especialidad.component";
import { ActualizacionEspecialidadComponent } from "./components/actualizacion-especialidad/actualizacion-especialidad.component";
import { RegistroUsuarioComponent } from "./components/registro-usuario/registro-usuario.component";
import { ActualizacionUsuarioComponent } from "./components/actualizacion-usuario/actualizacion-usuario.component";
import { GestionProcedimientosComponent } from "./components/gestion-procedimientos/gestion-procedimientos.component";
import { GestionPasosComponent } from "./components/gestion-pasos/gestion-pasos.component";
import { GestionEspecialidadesComponent } from "./components/gestion-especialidades/gestion-especialidades.component";
import { GestionUsuariosComponent } from "./components/gestion-usuarios/gestion-usuarios.component";
import { GestionComunicadosComponent } from "./components/gestion-comunicados/gestion-comunicados.component";
import { GestionConsultoriosComponent } from "./components/gestion-consultorios/gestion-consultorios.component";
import { RegistroComunicadoComponent } from "./components/registro-comunicado/registro-comunicado.component";
import { ActualizacionComunicadoComponent } from "./components/actualizacion-comunicado/actualizacion-comunicado.component";
import { ActualizacionProcedimientoAdmisionComponent } from "./components/actualizacion-procedimiento-admision/actualizacion-procedimiento-admision.component";
import { GestionRequerimientosComponent } from "./components/gestion-requerimientos/gestion-requerimientos.component";
import { RegistroConsultorioComponent } from "./components/registro-consultorio/registro-consultorio.component";
import { ActualizacionConsultorioComponent } from "./components/actualizacion-consultorio/actualizacion-consultorio.component";
import { GestionRolesUsuariosComponent } from "./components/gestion-roles-usuarios/gestion-roles-usuarios.component";
import { GestionProcedimientosElementosComponent } from "./components/gestion-procedimientos-elementos/gestion-procedimientos-elementos.component";
import { RegistroProcedimientoComponent } from "./components/registro-procedimiento/registro-procedimiento.component";
import { ActualizacionProcedimientoComponent } from "./components/actualizacion-procedimiento/actualizacion-procedimiento.component";
import { GestionProcedimientosElementosPasosComponent } from "./components/gestion-procedimientos-elementos-pasos/gestion-procedimientos-elementos-pasos.component";
import { GestionProcedimientosElementosRequisitosComponent } from "./components/gestion-procedimientos-elementos-requisitos/gestion-procedimientos-elementos-requisitos.component";
import { UsuarioNoLogeadoElementosProcedimientoComponent } from "./components/usuario-no-logeado-elementos-procedimiento/usuario-no-logeado-elementos-procedimiento.component";
import { UsuarioNoLogeadoDescripcionProcedimientoElementoComponent } from "./components/usuario-no-logeado-descripcion-procedimiento-elemento/usuario-no-logeado-descripcion-procedimiento-elemento.component";
import { ActualizacionRecetaComponent } from "./components/actualizacion-receta/actualizacion-receta.component";

const APP_ROUTES: Routes = [ 
    { path: '', component:  HomeComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'recuperar-contrasenia', component:  RecuperarContraseniaComponent},
    { path: 'horarios-atencion', component:  UsuarioNoLogeadoHorariosAtencionComponent},
    { path: 'especialidades-atencion', component:  UsuarioNoLogeadoEspecialidadedesComponent},
    { path: 'medicos-especialistas', component:  UsuarioNoLogeadoMedicosEspecialistasComponent},
    { path: 'procedimientos', component:  UsuarioNoLogeadoProcedimientosComponent},
    { path: 'procedimientos/:idProcedimiento', component:  UsuarioNoLogeadoElementosProcedimientoComponent},

    { path: 'procedimientos/:idProcedimiento/elementos/:idElemento/tipo-elemento/:tipo/requisitos', component:  UsuarioNoLogeadoRequisitosComponent},
    { path: 'procedimientos/:idProcedimiento/elementos/:idElemento/tipo-elemento/:tipo/pasos', component:  UsuarioNoLogeadoProcedimientosComponent},
    { path: 'procedimientos/:idProcedimiento/elementos/:idElemento/tipo-elemento/:tipoElemento', component:  UsuarioNoLogeadoDescripcionProcedimientoElementoComponent},
    { path: 'procedimientos/:idProcedimiento/elementos', component:  UsuarioNoLogeadoElementosProcedimientoComponent},

    { path: 'proceso-inscripcion', component:  UsuarioNoLogeadoProcesoInscripcionComponent},
    { path: 'comunicados', component:  UsuarioNoLogeadoNoticiasComponent},
    { path: 'comunicado/:id', component:  UsuarioNoLogeadoDetalleNoticiaComponent},
    { path: 'descripcion-medico/:id', component:  UsuarioNoLogeadoDescripcionMedicosComponent},
    { path: 'especialidad/:id', component:  UsuarioNoLogeadoEspeciaildadMedicaComponent},


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
    { path: 'detalle-certificado-medico/:id', component: DetalleCertificadoMedicoComponent},
    { path: 'detalle-examen-complementario/:id',component: DetalleExamenComplementarioComponent},
    { path: 'detalle-interconsulta/:id', component: DetalleInterconsultaComponent},
    { path: 'detalle-papeleta-internacion/:id', component: DetallePapeletaInternacionComponent},

    { path: 'paciente/ver-mis-historias-clinicas', component:  MisHistoriasClnicasComponent},
    { path: 'paciente/ver-mis-recetas', component:  MisRecetasComponent},
    { path: 'paciente/ver-mis-notas-referencia', component:  MisNotasReferenciaComponent},
    { path: 'paciente/ver-mis-notas-evolucion', component:  MisNotasEvolucionComponent},
    { path: 'paciente/ver-mis-certificados-medicos', component:  MisCertificadosMedicosComponent},
    { path: 'paciente/ver-mis-examenes-complementarios', component:  MisExamenesComplementariosComponent},
    { path: 'paciente/ver-mis-interconsultas', component:  MisSolicitudesInterconsultaComponent},
    { path: 'paciente/ver-mis-papeletas-internacion', component:  MisPapeletasInternacionComponent},


    { path: 'paciente/gestion-ficha-medica', component:  GestionFichasMedicasComponent,},
    { path: 'paciente/registro-ficha-medica', component:  RegistroFichaMedicaComponent,},
    { path: 'paciente/detalle-ficha-medica/:id', component:  DetalleFichaMedicaComponent},

    { path: 'medico/gestion-papeletas-internacion', component:  GestionPapeletasInternacionComponent},
    { path: 'medico/registro-papeleta-internacion', component:  RegistroPapeletaInternacionComponent},
    { path: 'medico/modificar-papeleta-internacion/:id', component:  ActualizacionPapeletaInternacionComponent},


    { path: 'medico/registro-certificado-medico', component:  RegistroCertificadoMedicoComponent},
    { path: 'medico/gestion-certificados-medicos', component:  GestionCertificadosMedicosComponent},
    { path: 'medico/modificar-certificado-medico/:id', component: ActualizacionCertificadoMedicoComponent},

    { path: 'medico/gestion-examenes-complementarios', component:  GestionExamenesComplementariosComponent},
    { path: 'medico/registro-examen-complementario', component: RegistroExamenComplementarioComponent},
    { path: 'medico/modificar-examen-complementario/:id', component: ActualizacionExamenComplementarioComponent},

    { path: 'medico/gestion-interconsultas', component:  GestionInterconsultasComponent},
    { path: 'medico/registro-interconsulta', component:  RegistroInterconsultaComponent},
    { path: 'medico/modificar-interconsulta/:id', component:  ActualizacionInterconsultaComponent},


    { path: 'medico/gestion-historias-clinicas', component:  GestionHistoriasClinicasComponent},
    { path: 'medico/registro-historia-clinica', component:  RegistroHistoriaClinicaComponent},
    { path: 'medico/modificar-historia-clinica/:id', component:  ActualizacionHistoriaClinicaComponent},

   
    { path: 'medico/gestion-notas-referencia', component:  GestionNotasReferenciaComponent},
    { path: 'medico/registro-nota-referencia', component:  RegistroNotaReferenciaComponent},
    { path: 'medico/modificar-nota-referencia/:id', component:  ActualizacionNotaReferenciaComponent},

       
    { path: 'medico/gestion-recetas', component:  GestionRecetasComponent},
    { path: 'medico/registro-receta', component:  RegistroRecetaComponent},
    { path: 'medico/modificar-receta/:id', component:  ActualizacionRecetaComponent},

    { path: 'medico/gestion-notas-evolucion', component:  GestionNotasEvolucionComponent},
    { path: 'medico/registro-nota-evolucion', component:  RegistroNotaEvolucionComponent},
    { path: 'medico/modificar-nota-evolucion/:id', component:  ActualizacionNotaEvolucionComponent},




    { path: 'administrador/gestion-pacientes', component:  GestionPacientesComponent},
    { path: 'administrador/gestion-medicos', component:  GestionMedicosComponent},

    { path: 'administracion/gestion-usuarios', component:  GestionUsuariosComponent},
    { path: 'administracion/registro-usuario', component:  RegistroUsuarioComponent},
    { path: 'administracion/modificar-usuario/:id', component:  ActualizacionUsuarioComponent},

    { path: 'administracion/gestion-roles-usuarios/:idUsuario', component:  GestionRolesUsuariosComponent},


    { path: 'administrador/gestion-turnos-atencion', component:  GestionTurnosAtencionMedicaComponent},
    { path: 'administrador/registro-turno-atencion', component:  RegistroTurnoAtencionComponent},
    { path: 'administrador/modificar-turno-atencion/:id', component:  ActualizacionTurnoAtencionComponent},


    { path: 'administracion/gestion-procedimientos', component:  GestionProcedimientosComponent},
    { path: 'administracion/registro-procedimiento', component:  RegistroProcedimientoComponent},
    { path: 'administracion/modificar-procedimiento/:id', component:  ActualizacionProcedimientoComponent},


    { path: 'administracion/gestion-procedimientos-elementos/:tipo/:id', component:  GestionProcedimientosElementosComponent},

    { path: 'administracion/gestion-procedimientos-elementos-pasos/procedimientos/:idProcedimiento/:tipoElemento/:idElemento', component:  GestionProcedimientosElementosPasosComponent},

    { path: 'administracion/gestion-procedimientos-elementos-requisitos/procedimientos/:idProcedimiento/:tipoElemento/:idElemento', component:  GestionProcedimientosElementosRequisitosComponent},


    { path: 'administracion/actualizacion-procedimiento-admision', component:  ActualizacionProcedimientoAdmisionComponent},

    
    { path: 'administracion/gestion-pasos', component:  GestionPasosComponent},

    { path: 'administracion/gestion-requisitos', component:  GestionRequerimientosComponent},

    
    { path: 'administracion/gestion-especialidades', component:  GestionEspecialidadesComponent},
    { path: 'administracion/registro-especialidad', component:  RegistroEspecialidadComponent},
    { path: 'administracion/modificar-especialidad/:id', component:  ActualizacionEspecialidadComponent},

    { path: 'administracion/gestion-comunicados', component:  GestionComunicadosComponent},
    { path: 'administracion/registro-comunicado', component:  RegistroComunicadoComponent},
    { path: 'administracion/modificar-comunicado/:id', component:  ActualizacionComunicadoComponent},


    { path: 'administracion/gestion-consultorios', component:  GestionConsultoriosComponent},
    { path: 'administracion/registro-consultorio', component:  RegistroConsultorioComponent},
    { path: 'administracion/modificar-consultorio/:id', component:  ActualizacionConsultorioComponent},


    { path: 'medico/ver-mis-consultas-medicas', component:  MisConsultasMedicasComponent},





];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled',enableTracing:false });
