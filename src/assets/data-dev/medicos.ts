export class MedicosDataDev{
    static medicos=[
        {
            "id": 1,
            "imagen": "doctor-home.png",
            "nombres": "Juan",
            "apellidos": "Pérez",
            "email": "juan.perez@example.com",
            "celular": "+1234567890",
            "aniosExperiencia": 5,
            "especialidades": [
                {
                    "idEspecialidad": 1,
                    "nombre": "Cardiología"
                },
                {
                    "idEspecialidad": 2,
                    "nombre": "Neurología"
                }
            ],
            "idiomas": [
              {
                "id":1,
                "nombre": "Español",
                "nivel": "Nativo"
              },
              {
                "id":2,
                "nombre": "Inglés",
                "nivel": "Avanzado"
              }
            ],
            "turnosAtencionMedica": [
              {
                "id":1,
                "nombreEspecialidad":"Cardiología",
                "horaInicio":"09:00",
                "horaFin":"12:30"
              }
            ],
            "descripcion": "Soy un médico con más de 5 años de experiencia en el campo de la medicina. Me especializo en cardiología y medicina interna, y tengo un sólido historial en el diagnóstico y tratamiento de enfermedades cardíacas y trastornos internos. Hablo español e inglés, lo que me permite atender a una amplia gama de pacientes y colaborar en entornos internacionales. Ofrezco atención médica tanto en la mañana como en la tarde, adaptándome a las necesidades de mis pacientes. Mi objetivo es brindar un cuidado integral y personalizado para mejorar la salud y el bienestar de quienes confían en mí."
          }
    ];    
}