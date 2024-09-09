class Materia {
    constructor(nombremateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadinscrito, modalidad, calificacionMinima, temas, ubicacion) {
        this.nombremateria = nombremateria;
        this.sigla = sigla;
        this.docente = docente;
        this.horarios = horarios;
        this.aula = aula;
        this.prerequisito = prerequisito;
        this.carrera = carrera;
        this.universidad = universidad;
        this.cantidadinscrito = cantidadinscrito;
        this.modalidad = modalidad;
        this.calificacionMinima = calificacionMinima;
        this.temas = temas;
        this.ubicacion = ubicacion;
    }
  
    // Métodos para mostrar la información de la materia
    NombreMateria() { return "El nombre de la materia es " + this.nombremateria; }
    Sigla() { return 'Su sigla es ' + this.sigla; }
    Docente() { return 'El docente de la materia es ' + this.docente; }
    Horarios() { return 'Los días de clases son ' + this.horarios; }
    Aula() { return 'El aula de la materia es ' + this.aula; }
    Prerequisito() { return 'Los requisitos para ingresar a esa materia son ' + this.prerequisito; }
    Carrera() { return 'La carrera es ' + this.carrera; }
    Universidad() { return 'En la universidad ' + this.universidad; }
    CantidadInscrito() { return 'El número de inscritos es ' + this.cantidadinscrito; }
    Modalidad() { return "La modalidad de la materia es: " + this.modalidad; }
    CalificacionMinima() { return "La califiacion minima para aprobar la materia es de: " + this.calificacionMinima; }
    Temas() { return "Los temas de la materia son: " + this.temas; }
    Ubicacion() { return "La ubicacion de la clase es en: " + this.ubicacion; }
  
    // Métodos para modificar los atributos de la materia
    modificar_NombreMateria() {
        const nuevoNombre = prompt('Ingrese un nuevo nombre de la materia:', this.nombremateria);
        if (nuevoNombre) this.nombremateria = nuevoNombre;
    }
  
    modificar_Sigla() {
        const nuevaSigla = prompt('Ingrese la nueva sigla:', this.sigla);
        if (nuevaSigla) this.sigla = nuevaSigla;
    }
  
    modificar_Docente() {
        const nuevoDocente = prompt('Ingrese el nuevo nombre del docente:', this.docente);
        if (nuevoDocente) this.docente = nuevoDocente;
    }
  
    modificar_Horarios() {
        const nuevosHorarios = prompt('Ingrese los nuevos horarios:', this.horarios);
        if (nuevosHorarios) this.horarios = nuevosHorarios;
    }
  
    modificar_Aula() {
        const nuevaAula = prompt('Ingrese el nuevo aula:', this.aula);
        if (nuevaAula) this.aula = nuevaAula;
    }
  
    modificar_Prerequisito() {
        const nuevoPrerequisito = prompt('Ingrese los nuevos prerequisitos:', this.prerequisito);
        if (nuevoPrerequisito) this.prerequisito = nuevoPrerequisito;
    }
  
    modificar_Carrera() {
        const nuevaCarrera = prompt('Ingrese la nueva carrera:', this.carrera);
        if (nuevaCarrera) this.carrera = nuevaCarrera;
    }
  
    modificar_Universidad() {
        const nuevaUniversidad = prompt('Ingrese el nuevo nombre de la universidad:', this.universidad);
        if (nuevaUniversidad) this.universidad = nuevaUniversidad;
    }
  
    modificar_CantidadInscrito() {
        const nuevaCantidad = prompt('Ingrese la nueva cantidad de inscritos:', this.cantidadinscrito);
        if (nuevaCantidad && !isNaN(nuevaCantidad)) {
            this.cantidadinscrito = parseInt(nuevaCantidad, 10);
        } else {
            alert('Error: Debe ingresar un número válido.');
        }
    }
    

    modificar_modalidad() {
        let nuevaModalidad = prompt('Ingrese la nueva modalidad (presencial, virtual, hibrido):', this.modalidad);
        nuevaModalidad = nuevaModalidad.toLowerCase();
        if (nuevaModalidad === "presencial" || nuevaModalidad === "virtual" || nuevaModalidad === "hibrido") {
            this.modalidad = nuevaModalidad;
        } else {
            alert("Error: Ingrese una modalidad válida (presencial, virtual, hibrido).");
        }
    }
    
  
    modificar_calificacionMinima() {
        const nuevaCalificacionMinima = prompt('Ingrese la nueva calificación mínima:', this.calificacionMinima);
        if (nuevaCalificacionMinima && !isNaN(nuevaCalificacionMinima)) {
            const numeroConvertido = parseInt(nuevaCalificacionMinima, 10);
            if (Number.isInteger(numeroConvertido)) {
                this.calificacionMinima = numeroConvertido;  
            } else {
                alert('Error: Debe ingresar un número entero.');
            }
        } else {
            alert('Error: Debe ingresar un número válido.');
        }
    }
    
  
    modificar_temas() {
        const nuevosTemas = prompt('Ingrese los nuevos temas que va a avanzar en el semestre', this.temas);
        if (nuevosTemas) this.temas = nuevosTemas;
    }
  
    modificar_ubicacion() {
        const nuevaUbicacion = prompt("Ingrese la nueva ubicación donde se dará la clase:", this.ubicacion);
        if (nuevaUbicacion) {
            this.ubicacion = nuevaUbicacion;
        }
    }
    
  
    // Métodos para eliminar los atributos de la materia
    Eliminar_NombreMateria() { this.nombremateria = undefined; }
    Eliminar_Sigla() { this.sigla = undefined; }
    Eliminar_Docente() { this.docente = undefined; }
    Eliminar_Horarios() { this.horarios = undefined; }
    Eliminar_Aula() { this.aula = undefined; }
    Eliminar_Prerequisito() { this.prerequisito = undefined; }
    Eliminar_Carrera() { this.carrera = undefined; }
    Eliminar_Universidad() { this.universidad = undefined; }
    Eliminar_CantidadInscrito() { this.cantidadinscrito = undefined; }
    Eliminar_modalidad(){ this.modalidad = undefined;}
    Eliminar_calificacionMinima(){ this.calificacionMinima = undefined;}
    Eliminar_temas(){ this.temas = undefined;}
    Eliminar_ubicacion(){ this.ubicacion = undefined;}
}
  
  // Crear una lista de materias
    let materias = [
        new Materia('Calulo 1', 'MAT-030', 'Victor Hugo Aspiazu Melgar', '[Lunes 7:30-9:00, Miercoles 7:30-9:00]', '10 A-N4', 'Matematica básica', 'Ingeniería Industrial', 'UCB', 34, "presencial", 60, "Funciones, limites de funciones, derivadas, integrales", "-17.694128964064742, -63.151576974546586"),
        new Materia('Física 1', 'FIS-111', 'Victor Hugo Lobp', '[Lunes 9:10-10:40, Miercoles 9:10-10:40]', '[E 2-5]', 'Ninguno', 'Ingeniería Industrial', 'UCB', 45, "Presencial", 60, "Magnitudes, unidades, fisicas; cinematica, Dinamica y estatica, fundamentos de la energia mecanica", "-17.694128964064742, -63.151576974546586"),
        new Materia('Manufactura y Mecanizado', 'IND-112', 'Jorge Salvatierra', '[Martes 7:30-9:00- Jueves 7:30-9:00, Viernes 7:30-9:00]', '[12 AULA A-N4], [F 1-2 (LAB. PROCESOS)]', 'Introducción a Diseño industrial', 'Ingeniería Industrial', 'UCB', 15, "Presencial", 60, "Procesos de manufactura avanzados, Maquinado de precisión, Metrología y control de calidad,Gestión de procesos de manufatura", "-17.694128964064742, -63.151576974546586"),
        new Materia('Antropologia y Valores', 'FHC-101', 'Exalta Gabriela de la Barra', '[Martes 9:10-10:40, Jueves 9:10-10:40]', '[4 AULA A-N3], B 2-1', 'Ninguno', 'Ingenieria Industrial', 'UCB', 61, "presencial", 60, "Antropología cultural, Teorías antropológicas, Antropología aplicada, Valores y ética en la antropología", "-17.694128964064742, -63.151576974546586"),
        new Materia('Probabilidad Y Estadistica 1', 'MAT142', 'Carmen Silvia Barca', '[Martes 10:50-12:20, Jueves 10:50-12:20]', '[D 2-1 (LAB. CÓMPUTO 2)]', 'Ninguno', 'Ingienria Industrial', 'UCB', 33, "presencial", 60, "Distribuciones de probabilidad, Teoremas fundamentales, Inferencia estadística, Regresión y correlación", "-17.694128964064742, -63.151576974546586"),
        new Materia('Laboratorio Fisica 1', 'FIS-111', 'Roberto Carlos Alvarez', '[Miercoles 12:30- 13:15]', 'LAB. DE PROCESOS F1-2', 'Ninguno', 'Ingenieria Industrial', 'Universidad XYZ', 17, "presencial", 60, "Experimentos básicos de mecánica, Cinemática y dinámica, Trabajo y energía, Otros temas según el enfoque del curso", "-17.694128964064742, -63.151576974546586"),
        new Materia('Programación 1', 'SIS-112', 'Eddy Escalante', '[Lunes 10:50-12:20, Viernes 10:50-11:35]', '[C 2-2 (LAB. CÓMPUTO 5)]', 'Ninguno', 'Introduccion a la programación', 'UCB', 16, "presencial", 60, "Estructuras de datos básicas, Algoritmos de ordenación y búsqueda, Programación orientada a objetos, Manejo de errores y excepciones", "-17.694128964064742, -63.151576974546586")
    ];
  
  // Cargar el selector con las materias
  const materiaSelect = document.getElementById('materiaSelect');
  materias.forEach((materia, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = materia.nombremateria;
    materiaSelect.appendChild(option);
  });
  
  // Mostrar la materia seleccionada
  function mostrarMateria() {
    const selectedIndex = materiaSelect.value;
    const materia = materias[selectedIndex];
  
    document.getElementById('NombreMateria').textContent = materia.NombreMateria();
    document.getElementById('Sigla').textContent = materia.Sigla();
    document.getElementById('Docente').textContent = materia.Docente();
    document.getElementById('Horarios').textContent = materia.Horarios();
    document.getElementById('Aula').textContent = materia.Aula();
    document.getElementById('Prerequisito').textContent = materia.Prerequisito();
    document.getElementById('Carrera').textContent = materia.Carrera();
    document.getElementById('Universidad').textContent = materia.Universidad();
    document.getElementById('CantidadInscrito').textContent = materia.CantidadInscrito();
    document.getElementById('Modalidad').textContent = materia.Modalidad();
    document.getElementById('CalificacionMinima').textContent = materia.CalificacionMinima();
    document.getElementById('Temas').textContent = materia.Temas();
    document.getElementById('Ubicacion').textContent = materia.Ubicacion();
  }
  
  // Modificar la materia seleccionada
  function modificarMateria() {
    const selectedIndex = materiaSelect.value;
    const materia = materias[selectedIndex];
  
    materia.modificar_NombreMateria();
    materia.modificar_Sigla();
    materia.modificar_Docente();
    materia.modificar_Horarios();
    materia.modificar_Aula();
    materia.modificar_Prerequisito();
    materia.modificar_Carrera();
    materia.modificar_Universidad();
    materia.modificar_CantidadInscrito();
    materia.modificar_modalidad();
    materia.modificar_CalificacionMinima();
    materia.modificar_Temas();
    materia.modificar_Ubicacion();
  
    // Actualizar el selector después de la modificación
    materiaSelect.options[selectedIndex].textContent = materia.nombremateria;
    mostrarMateria();
  }
  
  // Eliminar la materia seleccionada
  function eliminarMateria() {
    const selectedIndex = materiaSelect.value;
    materias.splice(selectedIndex, 1);  // Elimina la materia de la lista
  
    // Actualizar el selector después de la eliminación
    materiaSelect.remove(selectedIndex);
    limpiarMostrar();
  }
  
  // Limpiar la sección de mostrar materia
  function limpiarMostrar() {
    document.getElementById('NombreMateria').textContent = '';
    document.getElementById('Sigla').textContent = '';
    document.getElementById('Docente').textContent = '';
    document.getElementById('Horarios').textContent = '';
    document.getElementById('Aula').textContent = '';
    document.getElementById('Prerequisito').textContent = '';
    document.getElementById('Carrera').textContent = '';
    document.getElementById('Universidad').textContent = '';
    document.getElementById('CantidadInscrito').textContent = '';
    document.getElementById('Modalidad').textContent = '';
    document.getElementById('CalificacionMinima').textContent = '';
    document.getElementById('Temas').textContent = '';
    document.getElementById('Ubicacion').textContent = '';
  }





  