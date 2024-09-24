export class ProcedimientosElementosDataDev{
    static listaProcedimientosElementos:any[] = [
        {
            idProcedimiento: 1,
            nombreProcedimiento: "Consulta General",
            imagenes: [
                {
                "idImagen": 62,
                "nombre": "Captura de pantalla de 2024-09-23 22-47-50.png",
                "tipo": "image/png",
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBVh79jGaH-D21r7geT8NSnFWIqqAVEbFvA&s",
                "createdAt": "2024-09-24T10:47:25.000+00:00",
                "updatedAt": "2024-09-24T10:47:25.000+00:00",
                "deletedAt": null
              }
            ],
            requisitos:  [
                {
                    "idRequisito": 1,
                    "titulo": "CI",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": [
                        {
                            "idImagen": 50,
                            "nombre": "Taller II 3ra reunion tutor.png",
                            "tipo": "image/png",
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBVh79jGaH-D21r7geT8NSnFWIqqAVEbFvA&s",
                            "createdAt": "2024-09-22T23:27:09.000+00:00",
                            "updatedAt": "2024-09-22T23:27:09.000+00:00",
                            "deletedAt": null
                        },
                        {
                            "idImagen": 53,
                            "nombre": "Captura de pantalla de 2024-09-21 21-30-14.png",
                            "tipo": "image/png",
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBVh79jGaH-D21r7geT8NSnFWIqqAVEbFvA&s",
                            "createdAt": "2024-09-22T23:28:56.000+00:00",
                            "updatedAt": "2024-09-22T23:28:56.000+00:00",
                            "deletedAt": null
                        },
                        {
                            "idImagen": 54,
                            "nombre": "Captura de pantalla de 2024-09-21 21-30-14.png",
                            "tipo": "image/png",
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBVh79jGaH-D21r7geT8NSnFWIqqAVEbFvA&s",
                            "createdAt": "2024-09-22T23:28:56.000+00:00",
                            "updatedAt": "2024-09-22T23:28:56.000+00:00",
                            "deletedAt": null
                        }
                    ]
                }
                // {
                //     "titulo": "Llegar a la consulta",
                //     "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                //     "imagenes": [
                //         "https://example.com/images/paso2_llegar_consulta1.jpg",
                //         "https://example.com/images/paso2_llegar_consulta2.jpg"
                //     ]
                // },
                // {
                //     "titulo": "Presentar documentos",
                //     "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                //     "imagenes": [
                //         "https://example.com/images/paso3_presentar_documentos1.jpg",
                //         "https://example.com/images/paso3_presentar_documentos2.jpg"
                //     ]
                // },
            ],
            pasos: [
                {
                    "idPaso": 2,
                    "nombre": "Solicitar cita",
                    "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
                    "imagenes": []
                }
                // {
                //     "idPasoProcedimiento": 2,
                //     "nombre": "Llegar a la consulta",
                //     "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
                //     "imagenes": [
                //         "https://example.com/images/paso2_llegar_consulta1.jpg",
                //         "https://example.com/images/paso2_llegar_consulta2.jpg"
                //     ]
                // },
                // {
                //     "idPasoProcedimiento": 3,
                //     "nombre": "Presentar documentos",
                //     "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
                //     "imagenes": [
                //         "https://example.com/images/paso3_presentar_documentos1.jpg",
                //         "https://example.com/images/paso3_presentar_documentos2.jpg"
                //     ]
                // },
            ],
            id_especialidad: 101,
            descripcion_procedimiento: "Consulta médica general para evaluación y tratamiento.",
            createdAt: "2023-09-01T12:00:00Z",
            updatedAt: "2024-01-15T08:00:00Z",
            deletedAt: null
        }
        // {
        //     id_procedimiento_atencion: 2,
        //     nombre_procedimiento: "Examen de Sangre",
        //     requisitos:  [
        //         {
        //             "titulo": "Solicitar cita",
        //             "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
        //             "imagenes": [
        //                 "https://example.com/images/paso1_solicitar_cita1.jpg",
        //                 "https://example.com/images/paso1_solicitar_cita2.jpg"
        //             ]
        //         },
        //         {
        //             "titulo": "Llegar a la consulta",
        //             "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
        //             "imagenes": [
        //                 "https://example.com/images/paso2_llegar_consulta1.jpg",
        //                 "https://example.com/images/paso2_llegar_consulta2.jpg"
        //             ]
        //         },
        //         {
        //             "titulo": "Presentar documentos",
        //             "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
        //             "imagenes": [
        //                 "https://example.com/images/paso3_presentar_documentos1.jpg",
        //                 "https://example.com/images/paso3_presentar_documentos2.jpg"
        //             ]
        //         },
        //     ],
        //     pasos:  [
        //         {
        //             "idPasoProcedimiento": 1,
        //             "nombre": "Solicitar cita",
        //             "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
        //             "imagenes": [
        //                 "https://example.com/images/paso1_solicitar_cita1.jpg",
        //                 "https://example.com/images/paso1_solicitar_cita2.jpg"
        //             ]
        //         },
        //         {
        //             "idPasoProcedimiento": 2,
        //             "nombre": "Llegar a la consulta",
        //             "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
        //             "imagenes": [
        //                 "https://example.com/images/paso2_llegar_consulta1.jpg",
        //                 "https://example.com/images/paso2_llegar_consulta2.jpg"
        //             ]
        //         },
        //         {
        //             "idPasoProcedimiento": 3,
        //             "nombre": "Presentar documentos",
        //             "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
        //             "imagenes": [
        //                 "https://example.com/images/paso3_presentar_documentos1.jpg",
        //                 "https://example.com/images/paso3_presentar_documentos2.jpg"
        //             ]
        //         },
        //     ],
        //     id_especialidad: 102,
        //     descripcion_procedimiento: "Examen para análisis de componentes sanguíneos.",
        //     id_tipo_procedimiento: 2,
        //     created_at: "2024-02-01T09:00:00Z",
        //     updated_at: "2024-03-15T10:00:00Z",
        //     deleted_at: null
        // },
        // {
        //     id_procedimiento_atencion: 3,
        //     nombre_procedimiento: "Radiografía",
        //     requisitos:  [
        //         {
        //             "titulo": "Solicitar cita",
        //             "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
        //             "imagenes": [
        //                 "https://example.com/images/paso1_solicitar_cita1.jpg",
        //                 "https://example.com/images/paso1_solicitar_cita2.jpg"
        //             ]
        //         },
        //         {
        //             "titulo": "Llegar a la consulta",
        //             "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
        //             "imagenes": [
        //                 "https://example.com/images/paso2_llegar_consulta1.jpg",
        //                 "https://example.com/images/paso2_llegar_consulta2.jpg"
        //             ]
        //         },
        //         {
        //             "titulo": "Presentar documentos",
        //             "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
        //             "imagenes": [
        //                 "https://example.com/images/paso3_presentar_documentos1.jpg",
        //                 "https://example.com/images/paso3_presentar_documentos2.jpg"
        //             ]
        //         },
        //     ],
        //     pasos:  [
        //         {
        //             "idPasoProcedimiento": 1,
        //             "nombre": "Solicitar cita",
        //             "descripcion": "Primero, debes solicitar una cita en el centro médico. Puedes hacerlo en línea o por teléfono.",
        //             "imagenes": [
        //                 "https://example.com/images/paso1_solicitar_cita1.jpg",
        //                 "https://example.com/images/paso1_solicitar_cita2.jpg"
        //             ]
        //         },
        //         {
        //             "idPasoProcedimiento": 2,
        //             "nombre": "Llegar a la consulta",
        //             "descripcion": "Llega a la consulta a la hora programada. Asegúrate de llegar con tiempo para completar cualquier formulario necesario.",
        //             "imagenes": [
        //                 "https://example.com/images/paso2_llegar_consulta1.jpg",
        //                 "https://example.com/images/paso2_llegar_consulta2.jpg"
        //             ]
        //         },
        //         {
        //             "idPasoProcedimiento": 3,
        //             "nombre": "Presentar documentos",
        //             "descripcion": "Presenta los documentos necesarios, como tu DNI y tu Historia Clínica, en la recepción del centro médico.",
        //             "imagenes": [
        //                 "https://example.com/images/paso3_presentar_documentos1.jpg",
        //                 "https://example.com/images/paso3_presentar_documentos2.jpg"
        //             ]
        //         },
        //     ],
        //     id_especialidad: 103,
        //     descripcion_procedimiento: "Procedimiento para obtener imágenes del interior del cuerpo.",
        //     id_tipo_procedimiento: 4,
        //     created_at: "2024-03-01T14:00:00Z",
        //     updated_at: "2024-04-10T11:00:00Z",
        //     deleted_at: null
        // }
    ];
    
}