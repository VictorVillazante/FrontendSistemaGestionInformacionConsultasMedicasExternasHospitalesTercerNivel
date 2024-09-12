import { Especialidad } from "src/app/models/Especialidad";

export class EspecialidadesData{
    static especialidadesDataDev:any[]=[
        {
            "idEspecialidad": 1,
            "nombre": "Cardiología",
            "descripcion": "Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades del corazón.",
            "imagenes": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZYjqa2w66x13XKdVXJaBOx_nmjPFF5t9vw&s"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia médica completa.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe médico anterior.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Presentarse en la recepción con documentos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de solicitud.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-01-15T08:30:00Z",
            "createdAt": "2024-01-15T08:30:00Z",
            "updatedAt": "2024-01-20T10:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 2,
            "nombre": "Neurología",
            "descripcion": "Especialidad médica que trata los trastornos del sistema nervioso.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Estudios recientes del sistema nervioso.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe de estudios neurológicos previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Solicitar cita en el mostrador de neurología.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Presentar resultados de estudios anteriores.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-02-10T09:00:00Z",
            "createdAt": "2024-02-10T09:00:00Z",
            "updatedAt": "2024-02-12T11:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 3,
            "nombre": "Gastroenterología",
            "descripcion": "Especialidad médica que se enfoca en el diagnóstico y tratamiento de trastornos del sistema digestivo.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historial de problemas digestivos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe de exámenes digestivos previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Presentar documentación en la recepción.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes médicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-03-05T10:00:00Z",
            "createdAt": "2024-03-05T10:00:00Z",
            "updatedAt": "2024-03-10T12:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 4,
            "nombre": "Ortopedia",
            "descripcion": "Especialidad médica dedicada al diagnóstico, tratamiento y prevención de trastornos del sistema músculoesquelético.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Radiografías recientes.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe médico anterior.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Registro en la recepción con documentación.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes ortopédicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-04-01T11:00:00Z",
            "createdAt": "2024-04-01T11:00:00Z",
            "updatedAt": "2024-04-05T13:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 5,
            "nombre": "Endocrinología",
            "descripcion": "Especialidad médica que se encarga del diagnóstico y tratamiento de trastornos hormonales y metabólicos.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historial de problemas endocrinos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Resultados de exámenes hormonales previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Registrar en recepción con documentos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar formulario de antecedentes endocrinos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-05-12T14:00:00Z",
            "createdAt": "2024-05-12T14:00:00Z",
            "updatedAt": "2024-05-15T15:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 6,
            "nombre": "Dermatología",
            "descripcion": "Especialidad médica que trata enfermedades de la piel, cabello y uñas.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia clínica de problemas dermatológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Resultados de exámenes dermatológicos previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Entregar documentación en recepción.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes dermatológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-06-18T16:00:00Z",
            "createdAt": "2024-06-18T16:00:00Z",
            "updatedAt": "2024-06-22T17:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 7,
            "nombre": "Pediatría",
            "descripcion": "Especialidad médica que se enfoca en la salud y el bienestar de los niños.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia médica infantil completa.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe de salud infantil anterior.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Registrar en recepción con documentos del niño.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes pediátricos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-07-22T18:00:00Z",
            "createdAt": "2024-07-22T18:00:00Z",
            "updatedAt": "2024-07-25T19:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 8,
            "nombre": "Oftalmología",
            "descripcion": "Especialidad médica dedicada al diagnóstico y tratamiento de enfermedades oculares.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia clínica ocular previa.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Resultados de exámenes oculares previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Entregar documentación en recepción.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes oculares.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-08-10T20:00:00Z",
            "createdAt": "2024-08-10T20:00:00Z",
            "updatedAt": "2024-08-12T21:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 9,
            "nombre": "Otorrinolaringología",
            "descripcion": "Especialidad médica que se ocupa de los trastornos del oído, nariz y garganta.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia médica de problemas otorrinolaringológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe de estudios otorrinolaringológicos previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Registrar documentación en recepción.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar formulario de antecedentes otorrinolaringológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-09-05T21:00:00Z",
            "createdAt": "2024-09-05T21:00:00Z",
            "updatedAt": "2024-09-10T22:00:00Z",
            "deletedAt": null
        },
        {
            "idEspecialidad": 10,
            "nombre": "Urología",
            "descripcion": "Especialidad médica que se ocupa del diagnóstico y tratamiento de enfermedades del tracto urinario y del sistema reproductor masculino.",
            "imagenes": ["fondo-opciones-menu.jpg"],
            "requisitosSolicitudFichaMedica": [
                { "idRequisito": 1, "nombre": "Requisito 1", "descripcion": "Copia del documento de identidad.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idRequisito": 2, "nombre": "Requisito 2", "descripcion": "Historia médica de problemas urológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "requisitosMinimosAtencionConsultaExterna": [
                { "idRequisito": 3, "nombre": "Requisito 3", "descripcion": "Informe de estudios urológicos previos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "procedimientoObtencionFichaMedicaPresencial": [
                { "idPasoProcedimiento": 1, "nombre": "Paso 1", "descripcion": "Presentar documentación en recepción.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] },
                { "idPasoProcedimiento": 2, "nombre": "Paso 2", "descripcion": "Completar el formulario de antecedentes urológicos.", "imagenes": ["fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg", "fondo-opciones-menu.jpg"] }
            ],
            "fechaCreacion": "2024-10-10T22:00:00Z",
            "createdAt": "2024-10-10T22:00:00Z",
            "updatedAt": "2024-10-12T23:00:00Z",
            "deletedAt": null
        }
    ];
    
}