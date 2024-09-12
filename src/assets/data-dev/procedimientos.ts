export class ProcedimientosDataDev{
    static listaProcedimientos:any[] = [
        {
            id_procedimiento_atencion: 1,
            nombre_procedimiento: "Consulta General",
            requisitos: "DNI, Historia Clínica",
            pasos: "1. Solicitar cita\n2. Llegar a la consulta\n3. Realizar examen",
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
            requisitos: "Orden médica, ayuno de 8 horas",
            pasos: "1. Presentar orden\n2. Tomar muestra de sangre\n3. Esperar resultados",
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
            requisitos: "Orden médica, historial de radiografías previas",
            pasos: "1. Presentar orden\n2. Realizar radiografía\n3. Recoger resultados",
            id_especialidad: 103,
            descripcion_procedimiento: "Procedimiento para obtener imágenes del interior del cuerpo.",
            id_tipo_procedimiento: 4,
            created_at: "2024-03-01T14:00:00Z",
            updated_at: "2024-04-10T11:00:00Z",
            deleted_at: null
        }
    ];
    
}