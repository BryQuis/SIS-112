class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index =this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index,1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }  

    ordenar() {
        this.lista.sort((a,b) => a - b); //orden ascendente
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

function mostrarLista() {
    listaNumeros.innerHTML = '';
    listaEnteros.lista.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        listaNumeros.appendChild(li);
    });
}
let miLista = new ListaCadenas();
miLista.agregar("Hola");
miLista.agregar("Mundo");
console.log(miLista.lista); // Imprime: ["Hola", "Mundo"]