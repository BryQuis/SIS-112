class Persona {
    constructor(nombre, edad, carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }
    saludar (){
        console.log("Hola mi nombre es "+ this.nombre + " y tengo " + this.edad + " años.");
    }

    cumpleaños(){
        this.edad = this.edad + 1;
        console.log("Feliz cumpleaños, ahora engo "+ this.edad + " años.");
    }

    estudiar(){
        console.log("Estoy estudiando " + this.carrera );
    }
}
function SaludarPersona(){
    const persona1 =new Persona ("Ana", 22, "Ingenieria informatica");

persona1.saludar();

}

