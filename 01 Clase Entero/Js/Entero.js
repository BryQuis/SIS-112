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
        this.Num = parseInt(input.ariaValueMax, 10);
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

    IncrementarNum(){
        this.Num =this.Num + 1;
    }
    DecrementarNum(){
        this.Num =this.Num - 1;
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