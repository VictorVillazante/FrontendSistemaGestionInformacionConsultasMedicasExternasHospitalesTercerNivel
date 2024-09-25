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
import { GestionRecetasComponent } from './components/gestion-recetas/gestion-recetas.component';
import { GestionNotasReferenciaComponent } from './components/gestion-notas-referencia/gestion-notas-referencia.component';
import { GestionMedicosComponent } from './components/gestion-medicos/gestion-medicos.component';
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
import { MisNotasEvolucionComponent } from './components/mis-notas-evolucion/mis-notas-evolucion.component';
import { RegistroTurnoAtencionComponent } from './components/registro-turno-atencion/registro-turno-atencion.component';
import { ActualizacionTurnoAtencionComponent } from './components/actualizacion-turno-atencion/actualizacion-turno-atencion.component';
import { MisConsultasMedicasComponent } from './components/mis-consultas-medicas/mis-consultas-medicas.component';
import { UsuarioNoLogeadoHorariosAtencionComponent } from './components/usuario-no-logeado-horarios-atencion/usuario-no-logeado-horarios-atencion.component';
import { EspecialidadesAtencionComponent } from './shared/section-especialidades-atencion/especialidades-atencion.component';
import { CardEspecialidadesComponent } from './shared/card-especialidades/card-especialidades.component';
import { ScriptsService } from './services/scripts.service';
import { CarouselMedicosEspecialistasComponent } from './shared/section-medicos-especialistas/carousel-medicos-especialistas.component';
import { CardMedicoEspecialistaComponent } from './shared/card-medico-especialista/card-medico-especialista.component';
import { UsuarioNoLogeadoEspecialidadedesComponent } from './components/usuario-no-logeado-especialidadedes/usuario-no-logeado-especialidadedes.component';
import { UsuarioNoLogeadoMedicosEspecialistasComponent } from './components/usuario-no-logeado-medicos-especialistas/usuario-no-logeado-medicos-especialistas.component';
import { UsuarioNoLogeadoRequisitosComponent } from './components/usuario-no-logeado-requisitos/usuario-no-logeado-requisitos.component';
import { UsuarioNoLogeadoProcedimientosComponent } from './components/usuario-no-logeado-procedimientos/usuario-no-logeado-procedimientos.component';
import { CardPasoProcedimientoComponent } from './shared/card-paso-procedimiento/card-paso-procedimiento.component';
import { CardRequisitoProcedimientoComponent } from './shared/card-requisito/card-requisito-procedimiento.component';
import { UsuarioNoLogeadoProcesoInscripcionComponent } from './components/usuario-no-logeado-proceso-inscripcion/usuario-no-logeado-proceso-inscripcion.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { IconoFacebookComponent } from './shared/icono-facebook/icono-facebook.component';
import { IconoMailComponent } from './shared/icono-mail/icono-mail.component';
import { IconoTelefonoComponent } from './shared/icono-telefono/icono-telefono.component';
import { UsuarioNoLogeadoNoticiasComponent } from './components/usuario-no-logeado-noticias/usuario-no-logeado-noticias.component';
import { CardNoticiaComponent } from './shared/card-noticia/card-noticia.component';
import { UsuarioNoLogeadoDetalleNoticiaComponent } from './components/usuario-no-logeado-detalle-noticia/usuario-no-logeado-detalle-noticia.component';
import { SectionNoticiasComponent } from './shared/section-noticias/section-noticias.component';
import { UsuarioNoLogeadoDescripcionMedicosComponent } from './components/usuario-no-logeado-descripcion-medicos/usuario-no-logeado-descripcion-medicos.component';
import { UsuarioNoLogeadoEspeciaildadMedicaComponent } from './components/usuario-no-logeado-especiaildad-medica/usuario-no-logeado-especiaildad-medica.component';
import { GestionCertificadosMedicosComponent } from './components/gestion-certificados-medicos/gestion-certificados-medicos.component';
import { GestionPapeletasInternacionComponent } from './components/gestion-papeletas-internacion/gestion-papeletas-internacion.component';
import { BotonTipoBackgroundComponent } from './shared/boton-tipo-background/boton-tipo-background.component';
import { DateFormatPipe } from './util/pipes/date-format.pipe';
import { ListadoDocumentosComponent } from './shared/listado-documentos/listado-documentos.component';
import { FormularioFiltradoDocumentosComponent } from './shared/formulario-filtrado-documentos/formulario-filtrado-documentos.component';
import { GestionInterconsultasComponent } from './components/gestion-interconsultas/gestion-interconsultas.component';
import { GestionExamenesComplementariosComponent } from './components/gestion-examenes-complementarios/gestion-examenes-complementarios.component';
import { FormularioFiltradoDocumentosPacienteComponent } from './shared/formulario-filtrado-documentos-paciente/formulario-filtrado-documentos-paciente.component';
import { ListadoDocumentosPacienteComponent } from './shared/listado-documentos-paciente/listado-documentos-paciente.component';
import { SectionEspecialidadesRequisitosComponent } from './shared/section-especialidades-requisitos/section-especialidades-requisitos.component';
import { SectionEspecialidadesProcedimientosComponent } from './shared/section-especialidades-procedimientos/section-especialidades-procedimientos.component';
import { CardEspecialidadRequisitoComponent } from './shared/card-especialidad-requisito/card-especialidad-requisito.component';
import { CardEspecialidadProcedimientoComponent } from './shared/card-especialidad-procedimiento/card-especialidad-procedimiento.component';
import { MisCertificadosMedicosComponent } from './components/mis-certificados-medicos/mis-certificados-medicos.component';
import { MisExamenesComplementariosComponent } from './components/mis-examenes-complementarios/mis-examenes-complementarios.component';
import { MisSolicitudesInterconsultaComponent } from './components/mis-solicitudes-interconsulta/mis-solicitudes-interconsulta.component';
import { MisPapeletasInternacionComponent } from './components/mis-papeletas-internacion/mis-papeletas-internacion.component';
import { RegistroCertificadoMedicoComponent } from './components/registro-certificado-medico/registro-certificado-medico.component';
import { ActualizacionCertificadoMedicoComponent } from './components/actualizacion-certificado-medico/actualizacion-certificado-medico.component';
import { DetalleCertificadoMedicoComponent } from './components/detalle-certificado-medico/detalle-certificado-medico.component';
import { RegistroExamenComplementarioComponent } from './components/registro-examen-complementario/registro-examen-complementario.component';
import { ActualizacionExamenComplementarioComponent } from './components/actualizacion-examen-complementario/actualizacion-examen-complementario.component';
import { RegistroInterconsultaComponent } from './components/registro-interconsulta/registro-interconsulta.component';
import { ActualizacionInterconsultaComponent } from './components/actualizacion-interconsulta/actualizacion-interconsulta.component';
import { RegistroPapeletaInternacionComponent } from './components/registro-papeleta-internacion/registro-papeleta-internacion.component';
import { ActualizacionPapeletaInternacionComponent } from './components/actualizacion-papeleta-internacion/actualizacion-papeleta-internacion.component';
import { DetalleExamenComplementarioComponent } from './components/detalle-examen-complementario/detalle-examen-complementario.component';
import { DetalleInterconsultaComponent } from './components/detalle-interconsulta/detalle-interconsulta.component';
import { DetallePapeletaInternacionComponent } from './components/detalle-papeleta-internacion/detalle-papeleta-internacion.component';
import { GestionEspecialidadesComponent } from './components/gestion-especialidades/gestion-especialidades.component';
import { RecuperarContraseniaComponent } from './components/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroEspecialidadComponent } from './components/registro-especialidad/registro-especialidad.component';
import { InputImagenesComponent } from './shared/input-imagenes/input-imagenes.component';
import { FormularioDetalleEspecialidadComponent } from './shared/formulario-detalle-especialidad/formulario-detalle-especialidad.component';
import { ActualizacionEspecialidadComponent } from './components/actualizacion-especialidad/actualizacion-especialidad.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ActualizacionUsuarioComponent } from './components/actualizacion-usuario/actualizacion-usuario.component';
import { FormularioDetalleUsuarioComponent } from './shared/formulario-detalle-usuario/formulario-detalle-usuario.component';
import { GestionPasosComponent } from './components/gestion-pasos/gestion-pasos.component';
import { GestionRequerimientosComponent } from './components/gestion-requerimientos/gestion-requerimientos.component';
import { ElementosListadoComponent } from './shared/elementos-listado/elementos-listado.component';
import { GestionProcedimientosComponent } from './components/gestion-procedimientos/gestion-procedimientos.component';
import { InformacionCentroMedicoService } from './services/informacion-centro-medico.service';
import { TablaHorariosAtencionComponent } from './shared/tabla-horarios-atencion/tabla-horarios-atencion.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { GestionComunicadosComponent } from './components/gestion-comunicados/gestion-comunicados.component';
import { GestionConsultoriosComponent } from './components/gestion-consultorios/gestion-consultorios.component';
import { RegistroComunicadoComponent } from './components/registro-comunicado/registro-comunicado.component';
import { ActualizacionComunicadoComponent } from './components/actualizacion-comunicado/actualizacion-comunicado.component';
import { FrmularioComunicadoComponent } from './shared/frmulario-comunicado/frmulario-comunicado.component';
import { ActualizacionProcedimientoAdmisionComponent } from './components/actualizacion-procedimiento-admision/actualizacion-procedimiento-admision.component';
import { ActualizacionProcedimientoComponent } from './components/actualizacion-procedimiento/actualizacion-procedimiento.component';
import { RegistroProcedimientoComponent } from './components/registro-procedimiento/registro-procedimiento.component';
import { FoormularioDetalleProcedimientoComponent } from './shared/foormulario-detalle-procedimiento/foormulario-detalle-procedimiento.component';
import { FormularioDetalleConsultorioComponent } from './shared/formulario-detalle-consultorio/formulario-detalle-consultorio.component';
import { UsuarioNoLogeadoPasosComponent } from './components/usuario-no-logeado-pasos/usuario-no-logeado-pasos.component';
import { ActualizacionConsultorioComponent } from './components/actualizacion-consultorio/actualizacion-consultorio.component';
import { RegistroConsultorioComponent } from './components/registro-consultorio/registro-consultorio.component';

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
    GestionRecetasComponent,
    GestionNotasReferenciaComponent,
    GestionMedicosComponent,
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
    MisNotasEvolucionComponent,
    RegistroTurnoAtencionComponent,
    ActualizacionTurnoAtencionComponent,
    MisConsultasMedicasComponent,
    UsuarioNoLogeadoHorariosAtencionComponent,
    EspecialidadesAtencionComponent,
    CardEspecialidadesComponent,
    CarouselMedicosEspecialistasComponent,
    CardMedicoEspecialistaComponent,
    UsuarioNoLogeadoEspecialidadedesComponent,
    UsuarioNoLogeadoMedicosEspecialistasComponent,
    UsuarioNoLogeadoRequisitosComponent,
    UsuarioNoLogeadoProcedimientosComponent,
    CardRequisitoProcedimientoComponent,
    CardPasoProcedimientoComponent,
    UsuarioNoLogeadoProcesoInscripcionComponent,
    WhatsappComponent,
    IconoFacebookComponent,
    IconoMailComponent,
    IconoTelefonoComponent,
    UsuarioNoLogeadoNoticiasComponent,
    CardNoticiaComponent,
    UsuarioNoLogeadoDetalleNoticiaComponent,
    SectionNoticiasComponent,
    UsuarioNoLogeadoDescripcionMedicosComponent,
    UsuarioNoLogeadoEspeciaildadMedicaComponent,
    GestionCertificadosMedicosComponent,
    GestionPapeletasInternacionComponent,
    BotonTipoBackgroundComponent,
    DateFormatPipe,
    ListadoDocumentosComponent,
    FormularioFiltradoDocumentosComponent,
    GestionInterconsultasComponent,
    GestionExamenesComplementariosComponent,
    FormularioFiltradoDocumentosPacienteComponent,
    ListadoDocumentosPacienteComponent,
    SectionEspecialidadesRequisitosComponent,
    SectionEspecialidadesProcedimientosComponent,
    CardEspecialidadRequisitoComponent,
    CardEspecialidadProcedimientoComponent,
    MisCertificadosMedicosComponent,
    MisExamenesComplementariosComponent,
    MisSolicitudesInterconsultaComponent,
    MisPapeletasInternacionComponent,
    RegistroCertificadoMedicoComponent,
    ActualizacionCertificadoMedicoComponent,
    DetalleCertificadoMedicoComponent,
    RegistroExamenComplementarioComponent,
    ActualizacionExamenComplementarioComponent,
    RegistroInterconsultaComponent,
    ActualizacionInterconsultaComponent,
    RegistroPapeletaInternacionComponent,
    ActualizacionPapeletaInternacionComponent,
    DetalleExamenComplementarioComponent,
    DetalleInterconsultaComponent,
    DetallePapeletaInternacionComponent,
    GestionEspecialidadesComponent,
    RecuperarContraseniaComponent,
    RegistroEspecialidadComponent,
    InputImagenesComponent,
    FormularioDetalleEspecialidadComponent,
    ActualizacionEspecialidadComponent,
    RegistroUsuarioComponent,
    ActualizacionUsuarioComponent,
    FormularioDetalleUsuarioComponent,
    GestionPasosComponent,
    GestionRequerimientosComponent,
    ElementosListadoComponent,
    GestionProcedimientosComponent,
    TablaHorariosAtencionComponent,
    GestionUsuariosComponent,
    GestionComunicadosComponent,
    GestionConsultoriosComponent,
    RegistroComunicadoComponent,
    ActualizacionComunicadoComponent,
    FrmularioComunicadoComponent,
    ActualizacionProcedimientoAdmisionComponent,
    ActualizacionProcedimientoComponent,
    RegistroProcedimientoComponent,
    FoormularioDetalleProcedimientoComponent,
    FormularioDetalleConsultorioComponent,
    UsuarioNoLogeadoPasosComponent,
    ActualizacionConsultorioComponent,
    RegistroConsultorioComponent
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
  providers: [
    ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
