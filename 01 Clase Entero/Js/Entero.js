class Entero {
    //Atributos
    Num;
    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;
    }
    //CLASS - Cargar el valor de Num
    setNum(){
        const input = document.getElementById("numeroInput");
        this.Num = parseInt(input.value, 10);
    }
    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }
    //CLASS - Mostrar el valor de Num
    showNum(){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    IncrementarNum(){
        this.Num =this.Num + 1;
    }
    DecrementarNum(){
        this.Num =this.Num - 1;
    }

    esParImpar(){
        return (this.Num % 2 ==0)
    }
    esPositivoNegativo() { 
        if (this.Num > 0) { return "Es positivo"; } else if (this.Num < 0) { 
            return "Es negativo"; 
        } else { 
            return "Es cero"; 
        } 
    } 

    esPerfecto (){
        var suma = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i == 0) {
                suma += i;
            }
        }
        return suma === this.Num;
    }

    factorial(){
        var factorial = 1;
        for (let i = 1; i <= this.Num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

//Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum(){
    ClaseEntero.showNum();
}
// Incrementar el valor de Num
function IncrementarValor(){
    ClaseEntero.IncrementarNum();
    ClaseEntero.showNum();
}

//Decrementar el valor Num
function DecrementarValor(){
    ClaseEntero.DecrementarNum();
    ClaseEntero.showNum();
}
//verfifica si es par o impar
function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "El numero es Par" : "El numero es impar";
    ClaseEntero.showResultado(resp);
}
//Verificar si es postivo y negativo
function esPositivoNegativoNum() {
    var respuesta = ClaseEntero.esPositivoNegativo();
    ClaseEntero.showResultado(respuesta);
}
function esPerfectoNum(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta? "El numero es Perfecto" : "El numero no es Perfecto";
    ClaseEntero.showResultado(resp);

}

function factorialNum(){
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado(respuesta);
}