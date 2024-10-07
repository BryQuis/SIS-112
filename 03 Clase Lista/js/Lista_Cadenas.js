class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.mostrarLista();

    }

    eliminar(valor) {
        const index =this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index,1);
        }
        this.mostrarLista();
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }  

    ordenar() {
        this.lista.sort((a,b) => a - b);
        this.mostrarlista();       //orden ascendente
    }


    mostrarLista() {
        const listaelement = document .getElementById("listaCadenas");
        listaelement.innerHTML = '';
        this.lista.forEach(item =>{
            const li = document.createElement('li');
            li.textContent = item;
            listaNumeros.appendChild(li);
        });
    }

}

const listaEnteros = new ListaEnteros();
const input = document.getElementById('numeroInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaNumeros = document.getElementById('listaNumeros');
const eliminarBtn = document.getElementById('EliminarBtn');
const BuscarUnDato = document.getElementById('BuscarlosDatos');
const OrdenarDato = document.getElementById('OrdenarDato');

agregarBtn.addEventListener('click', () => {
    const valor = parseInt(input.value);
    if (!isNaN(valor)) {
        listaEnteros.agregar(valor);
        mostrarLista();
        input.value = '';
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});


/*
const miLista = new ListaCadenas();
miLista.agregar("Hola");
miLista.agregar("Mundo");
miLista.agregar("UCB")




var a = miLista.lista[0]
console.log(a);
var aCant = a.lenght;
console.log (aCant);

var a = miLista.lista[1]
console.log(b);
var bCant = b.lenght;
console.log (bCant);

var a = miLista.lista[2]
console.log(c);
var cCant = c.lenght;
console.log (cCant);

console.log(miLista.lista);    // Imprime: ["Hola", "Mundo", "UCB"]q


var mayor = 0
if (a > mayor){
    mayor = a;
}

if (b > mayor){
    mayor = b;
}

if (c > mayor){
    mayor = c;
}

console.log (mayor);

*/

// Suponiendo que miLista ya ha sido creada y contiene algunos elementos
miLista.agregar("Hola");
miLista.agregar("Mundo");
miLista.agregar("UCB");

// Variables para almacenar la longitud y el mayor
let mayor = 0;

// Iterar sobre la lista
for (let i = 0; i < miLista.lista.length; i++) {
    const item = miLista.lista[i]; // Obtener el elemento actual
    console.log(item); // Mostrar el elemento en la consola
    const longitud = item.length; // Calcular la longitud
    console.log(longitud); // Mostrar la longitud

    // Comparar para encontrar el mayor
    if (longitud > mayor) {
        mayor = longitud; // Actualizar mayor si es necesario
    }
}

console.log(miLista.lista); // Imprime: ["Hola", "Mundo", "UCB"]
console.log("La longitud mayor es:", mayor); // Imprime la longitud mayor

