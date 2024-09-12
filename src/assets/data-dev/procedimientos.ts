export class ProcedimientosDataDev{
    static listaProcedimientos:any[] = [
        {
            id_procedimiento_atencion: 1,
            nombre_procedimiento: "Consulta General",
            requisitos:  [
                {
                    "titulo": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "titulo": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "titulo": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            pasos: [
                {
                    "idPasoProcedimiento": 1,
                    "nombre": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 2,
                    "nombre": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 3,
                    "nombre": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            id_especialidad: 101,
            descripcion_procedimiento: "Consulta médica general para evaluación y tratamiento.",
            id_tipo_procedimiento: 5,
            created_at: "2023-09-01T12:00:00Z",
            updated_at: "2024-01-15T08:00:00Z",
            deleted_at: null
        },
        {
            id_procedimiento_atencion: 2,
            nombre_procedimiento: "Examen de Sangre",
            requisitos:  [
                {
                    "titulo": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "titulo": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "titulo": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            pasos:  [
                {
                    "idPasoProcedimiento": 1,
                    "nombre": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 2,
                    "nombre": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 3,
                    "nombre": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            id_especialidad: 102,
            descripcion_procedimiento: "Examen para análisis de componentes sanguíneos.",
            id_tipo_procedimiento: 2,
            created_at: "2024-02-01T09:00:00Z",
            updated_at: "2024-03-15T10:00:00Z",
            deleted_at: null
        },
        {
            id_procedimiento_atencion: 3,
            nombre_procedimiento: "Radiografía",
            requisitos:  [
                {
                    "titulo": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "titulo": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "titulo": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            pasos:  [
                {
                    "idPasoProcedimiento": 1,
                    "nombre": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        "https://example.com/images/paso1_solicitar_cita1.jpg",
                        "https://example.com/images/paso1_solicitar_cita2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 2,
                    "nombre": "Llegar a la consulta",
                    "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                    "imagenes": [
                        "https://example.com/images/paso2_llegar_consulta1.jpg",
                        "https://example.com/images/paso2_llegar_consulta2.jpg"
                    ]
                },
                {
                    "idPasoProcedimiento": 3,
                    "nombre": "Presentar documentos",
                    "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                    "imagenes": [
                        "https://example.com/images/paso3_presentar_documentos1.jpg",
                        "https://example.com/images/paso3_presentar_documentos2.jpg"
                    ]
                },
            ],
            id_especialidad: 103,
            descripcion_procedimiento: "Procedimiento para obtener imágenes del interior del cuerpo.",
            id_tipo_procedimiento: 4,
            created_at: "2024-03-01T14:00:00Z",
            updated_at: "2024-04-10T11:00:00Z",
            deleted_at: null
        }
    ];
    
}