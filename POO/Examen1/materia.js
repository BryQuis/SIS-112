class Materia {
    constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, cantidadInscritos, carrera, universidad) {
      this.nombreMateria = nombreMateria;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidadInscritos = cantidadInscritos;
    }
  
    MateriaInscrita() {
      return "La materia inscrita es: " + this.nombreMateria + " (" + this.sigla + ")";
    }
  
    DatosDeLaMateria() {
      return 'El docente de la materia es: ' + this.docente + ", con los horarios: " + this.horarios + ", en el aula:" + this.aula + " (actualmente hay " + this.cantidadInscritos + " personas inscritas)";
    }
  
    Prerequisito() {
      return "Es necesario tener la materia de: " + this.prerequisito + " aprobada";
    }
  
    Estudio() {
      return 'Se encuentra en la ' + this.universidad + " estudiando la carrera de " + this.carrera;
    }
  

    // Métodos para eliminar atributos
    Eliminar_nombreMateria() {
      this.nombreMateria = undefined;
    }
  
    Eliminar_sigla() {
      this.sigla = undefined;
    }
  
    Eliminar_docente() {
      this.docente = undefined;
    }
  
    Eliminar_horarios() {
      this.horarios = undefined;
    }
  
    Eliminar_aula() {
      this.aula = undefined;
    }
  
    Eliminar_prerequisito() {
      this.prerequisito = undefined;
    }
  
    Eliminar_cantidadInscritos() {
      this.cantidadInscritos = undefined;
    }
  
    Eliminar_carrera() {
      this.carrera = undefined;
    }
  
    Eliminar_universidad() {
      this.universidad = undefined;
    }
  }
  
  // Crear una instancia de la clase Materia
  const FisicaTeoria = new Materia('Fisica', "FIS-111", 'Ing. Lobo', 'Lunes: 9:10-10:50 , Miercoles: 9:10-10:50', "E 2-5", "Ninguno", 46, "Ingenieria Industrial", "UCB");
  const Calculo = new Materia('Calculo', "MAT-132", 'Tomas Aleman', 'Lunes: 14:05-15:35 , Miercoles: 14:05-15:05', 'A 12A 4N', 'MAT-030', 22, "Ingenieria Industrial", "UCB");

  // Inicializar los elementos HTML
  const materiaInscrita = document.getElementById('materiaInscrita');
  const datosDeLaMateria = document.getElementById('datosDeLaMateria');
  const prerequisitos = document.getElementById('prerequisitos');
  const estudio = document.getElementById('estudio');







  
  // FisicaTeoria
  //Crear Botones
  function boton_MateriaInscrita() {
    materiaInscrita.textContent = FisicaTeoria.MateriaInscrita();
  }
  
  function boton_DatosDeLaMateria() {
    datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
  }
  
  function boton_Prerequisitos() {
    prerequisitos.textContent = FisicaTeoria.Prerequisito();
  }
  
  function boton_Estudio() {
    estudio.textContent = FisicaTeoria.Estudio();
  }
  
  // Modificar botones 
  function validarTexto(input) {
    return /^[A-Za-z\s]+$/.test(input);
  }
  
  function boton_modificar_nombreMateria() {
    let nuevoNombre = prompt('Ingresa el nuevo nombre de la materia:');
    if (nuevoNombre !== null && validarTexto(nuevoNombre)) {
      FisicaTeoria.nombreMateria = nuevoNombre;
      materiaInscrita.textContent = FisicaTeoria.MateriaInscrita();
    } else {
      alert('Por favor, los nombres no deben contener números.');
    }
  }
  
  function boton_modificar_sigla() {
    let nuevaSigla = prompt('Ingresa la nueva sigla de la materia:');
    if (nuevaSigla !== null && validarTexto(nuevaSigla)) {
      FisicaTeoria.sigla = nuevaSigla;
      datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
    } else {
      alert('Por favor, la sigla solo debe contener letras.');
    }
  }
  
  function boton_modificar_docente() {
    let nuevoDocente = prompt('Ingresa el nuevo nombre del docente:');
    if (nuevoDocente !== null && validarTexto(nuevoDocente)) {
      FisicaTeoria.docente = nuevoDocente;
      datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
    } else {
      alert('Por favor, el nombre del docente no debe contener números.');
    }
  }
  
  function boton_modificar_horarios() {
    let nuevosHorarios = prompt('Ingresa los nuevos horarios de la materia (separados por comas):');
    if (nuevosHorarios !== null) {
      FisicaTeoria.horarios = nuevosHorarios.split(','); // Separa los horarios por comas
      datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
    } else {
      alert('Por favor, ingresa horarios válidos.');
    }
  }
  
  function boton_modificar_aula() {
    let nuevoAula = prompt('Ingresa el nuevo aula de la materia:');
    if (nuevoAula !== null && validarTexto(nuevoAula)) {
      FisicaTeoria.aula = nuevoAula;
      datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
    } else {
      alert('Por favor, ingresa un aula válida.');
    }
  }
  
  function boton_modificar_prerequisito() {
    let nuevoPrerequisito = prompt('Ingresa el nuevo prerrequisito de la materia:');
    if (nuevoPrerequisito !== null && validarTexto(nuevoPrerequisito)) {
      FisicaTeoria.prerequisito = nuevoPrerequisito;
      prerequisitos.textContent = FisicaTeoria.Prerequisito();
    } else {
      alert('Por favor, ingresa un prerrequisito válido.');
    }
  }
  
  function boton_modificar_cantidadInscritos() {
    let nuevoCantidadInscritos = prompt('Ingresa el nuevo número de inscritos:');
    if (nuevoCantidadInscritos !== null && !isNaN(nuevoCantidadInscritos)) {
      FisicaTeoria.cantidadInscritos = parseInt(nuevoCantidadInscritos, 10);
      datosDeLaMateria.textContent = FisicaTeoria.DatosDeLaMateria();
    } else {
      alert('Por favor, ingresa un número válido.');
    }
  }
  
  function boton_modificar_carrera() {
    let nuevaCarrera = prompt('Ingresa el nuevo nombre de la carrera:');
    if (nuevaCarrera !== null && validarTexto(nuevaCarrera)) {
      FisicaTeoria.carrera = nuevaCarrera;
      estudio.textContent = FisicaTeoria.Estudio();
    } else {
      alert('Por favor, ingresa una carrera válida.');
    }
  }
  
  function boton_modificar_universidad() {
    let nuevaUniversidad = prompt('Ingresa el nuevo nombre de la universidad:');
    if (nuevaUniversidad !== null && validarTexto(nuevaUniversidad)) {
      FisicaTeoria.universidad = nuevaUniversidad;
      estudio.textContent = FisicaTeoria.Estudio();
    } else {
      alert('Por favor, ingresa una universidad válida.');
    }
  }
// Eliminar botones
  function eliminar_nombreMateria() {
    FisicaTeoria.nombreMateria = undefined;
    materiaInscrita.textContent = "Nombre de la materia eliminado";
  }
  
  function eliminar_sigla() {
    FisicaTeoria.sigla = undefined;
    datosDeLaMateria.textContent = "Sigla eliminada";
  }
  
  function eliminar_docente() {
    FisicaTeoria.docente = undefined;
    datosDeLaMateria.textContent = "Docente eliminado";
  }
  
  function eliminar_horarios() {
    FisicaTeoria.horarios = undefined;
    datosDeLaMateria.textContent = "Horarios eliminados";
  }
  
  function eliminar_aula() {
    FisicaTeoria.aula = undefined;
    datosDeLaMateria.textContent = "Aula eliminada";
  }
  
  function eliminar_prerequisito() {
    FisicaTeoria.prerequisito = undefined;
    prerequisitos.textContent = "Prerequisito eliminado";
  }
  
  function eliminar_cantidadInscritos() {
    FisicaTeoria.cantidadInscritos = undefined;
    datosDeLaMateria.textContent = "Cantidad de inscritos eliminada";
  }
  
  function eliminar_carrera() {
    FisicaTeoria.carrera = undefined;
    estudio.textContent = "Carrera eliminada";
  }
  
  function eliminar_universidad() {
    FisicaTeoria.universidad = undefined;
    estudio.textContent = "Universidad eliminada";
  }


// Funciones para Calculo
