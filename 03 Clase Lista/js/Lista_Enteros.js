class listaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(parseInt(valor)); // Convertir a número entero
    }

    eliminar(valor) {
        const index = this.lista.indexOf(parseInt(valor)); // Convertir a número entero
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(parseInt(valor)); // Convertir a número entero
    }

    ordenar() {
        this.lista.sort((a, b) => a - b);
    }
}

// Crear una instancia de listaEnteros
let miLista = new listaEnteros();
miLista.agregar(21);
miLista.agregar(12);
miLista.agregar(15);
miLista.agregar(30);

// Mostrar el tercer elemento en la lista
var a = miLista.lista[0];
console.log(a); 

var b = miLista.lista[1];
console.log(b); 

var c = miLista.lista[2];
console.log(c); 

var d = miLista.lista[3];
console.log(d); 

var datoMenor = -1;
/*
var a = miLista.lista[0];
if(a > datoMenor){
    datoMenor = a;
}
console.log("Dato Menor: " + datoMenor);

var b = miLista.lista[1];
if(a > b){
    datoMenor = b;
}
console.log("Dato Menor: " + datoMenor);

var c = miLista.lista[2];
if(b > c){
    datoMenor = c;
}
console.log("Dato Menor: " + datoMenor);

var d = miLista.lista[3];
if(c > d){
    datoMenor = d;
}
console.log("Dato Menor: " + datoMenor);
*/
var datoMenor = miLista.lista[0]; // Asumimos que el primer elemento es el menor inicialmente

for (let i = 1; i < miLista.lista.length; i++) {
    if (miLista.lista[i] < datoMenor) {
        datoMenor = miLista.lista[i];
    }
    console.log("Dato Menor: " + datoMenor);
}
// Función para agregar enteros a la lista y mostrarla
function agregarEntero(valor) {
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        console.log('Lista actualizada:', miLista.lista);
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
}

// Función para buscar un entero en la lista
function buscarEntero(valor) {
    const index = miLista.buscar(valor);
    if (index !== -1) {
        console.log(valor + ' se encuentra en la posición: ' + index);
    } else {
        console.log(valor + ' no se encuentra en la lista.');
    }
}

// Función para ordenar la lista
function ordenarLista() {
    miLista.ordenar();
    console.log('Lista ordenada:', miLista.lista);
}

// Ejemplo de uso en la consola
agregarEntero(45); // Agregar un número
buscarEntero(12);  // Buscar un número
ordenarLista();    // Ordenar la lista