class Cadena {
    constructor(cadena) {
      this.cadena = cadena;
    }
  
    getCadena() { //Obtiene el valor asignado a la cadena
      return this.cadena;
    }
  
    // Manipulación de cadenas
    concatenar(otraCadena) {  //Unir una cadena con otra
      this.cadena += otraCadena;
    }
  
    invertir() { //Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
    }
  
    // Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
    }
  
    contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
    }
  
    comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
    }
  
    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
    }
  
    // Otras operaciones
    longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
    }
  
    aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
      return this.cadena.toUpperCase();
    }
  
    aMinusculas() { //Obtiene la cadena transformada en minuscula
      return this.cadena.toLowerCase();
    }
  }
  
  let cadena = new Cadena('');
  
  function ejecutar(metodo) {
    const input = document.getElementById('inputCadena');
    const resultadoDiv = document.getElementById('resultado');
    const valorInput = input.value;
  
    switch (metodo) {
      case 'getCadena':
        resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
        break;
      case 'concatenar':
        cadena.concatenar(valorInput);
        resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
        break;
      case 'invertir':
        cadena.invertir();
        resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
        break;
      case 'esVacia':
        resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
        break;
      case 'contiene':
        resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
        break;
      case 'comienzaCon':
        resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
        break;
      case 'terminaCon':
        resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
        break;
      case 'longitud':
        resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
        break;
      case 'aMayusculas':
        resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
        break;
      case 'aMinusculas':
        resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
        break;
      default:
        resultadoDiv.innerHTML = 'Método no reconocido.';
    }
  }