class Matrices {
    constructor (canvasId, filas, columnas, anchoCelda, altoCelda ){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = altoCelda;
        this.altoCelda = altoCelda; 

        //Creamos la matriz bidimencional vacia
        this.matriz = [];
        this.vaciarMatriz();
    }
    // Metodo para vaciar la matriz 
    vaciarMatriz() {
        for(let i = 0; i < this.filas; i++){
            this.matriz[i] = [];
            for(let j = 0; j < this.columnas; j++){
                this.matriz[i][j] = 0;
            }
        }
    }

    //Metodo para dibujar la matriz en el canvas
    dibujarMatriz() {
        for(let i = 0; i < this.filas; i++){
            for(let j = 0; j < this.columnas; j++){
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }
    // Metodo para dibujar las celdas segun el valor que le asignemos
    dibujarCelda(x, y, valor){
        switch(valor){
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda); 
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }

    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#ffffff"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#e5e0e0"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#ff0000"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#0400ff"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);

    }
    //Metodo para iterar la matriz en las filas y columnas
    iterarMatriz(callback){
        for(let i = 0; i < this.filas; i++){
            for(let j = 0; j < this.columnas; j++){
                callback(i, j);
            }
        }
    }
    //Empezamos con las funciones para la matriz

    //Ejercicio #1
    llenarTodasLasCasillas(){
        this.vaciarMatriz();
        this.iterarMatriz((i,j) => {
            this.matriz[i][j] = 1;

        })
        this.dibujarMatriz();
    }
    //Ejercicio #2
    llenarMarcoInterno (){
        this.vaciarMatriz()
        this.iterarMatriz((i,j) =>{
            if ((i > 0 && i != this.filas - 1) && (j > 0 && j != this.filas - 1)){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #3
    llenarConCruces (){
        this.vaciarMatriz()
        this.iterarMatriz((i,j) =>{
            if ((i == this.filas/2 ) || (j == this.columnas/2 )){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #4
    llenarConBordesyDiagonales(){
        this.vaciarMatriz()
        this.iterarMatriz((i,j) =>{
            if (i == j || i + j == this.filas - 1){
                if ((i && j != this.filas - 2) && (i && j != 1)){
                        this.matriz[i][j] = 2;
                }
            }
            if ((i == 0 || i == this.filas - 1) || (j == 0 || j == this.columnas - 1)){
                this.matriz[i][j] = 1;
            }
            
        })
        this.dibujarMatriz();
    }
    //Ejercicio #5
    llenarConBandera (){
        this.vaciarMatriz()
        this.iterarMatriz((i,j) =>{
            if (i >= this.filas/2){
                this.matriz[i][j] = 1;
            }
            while (i < this.filas/2  && j < this.columnas/2 - 1){
                this.matriz[i][j] = 2;
                i++;
                j++;
            }
            
        })
        this.dibujarMatriz();
    }
    //Ejercicio #6
    llenarAlternamente (){
        this.vaciarMatriz()
        let valor = 1;
        this.iterarMatriz((i,j) =>{
            this.matriz[j][i] = valor;
            valor = valor == 1? 0 : 1;  
        })
        this.dibujarMatriz();

    }
    //Ejercicio #7
    llenarZigZag(){
        this.vaciarMatriz()
        this.iterarMatriz((i,j) =>{
            if (i == j ){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #8
    llenarEnEspiral (){
        this.vaciarMatriz(); // Limpia la matriz antes de llenarla

        const filas = this.filas; // Asume que tienes filas y columnas definidas
        const columnas = this.columnas;

         this.iterarMatriz((i, j) => {
        // Dibuja el contorno y los vacíos internos de la "E"
            if (
                i === 0 || i === filas - 1 || // Líneas superior e inferior completas
                j === 0 || j === columnas - 1 || // Lados izquierdo y derecho completos
                (i % 2 === 1 && j > 0 && j < columnas - 1 && j % 2 === 1) // Vacíos internos alternados
            ) {
                this.matriz[i][j] = 1; // Llena con 1 en las posiciones necesarias
            }
        });

        this.dibujarMatriz();
    }
    //Ejercicio #9
    llenarConTrianguloInferiorIzquierdo(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i >= j ){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }

    //Ejercicio #10
    llenarConTrianguloInferiorDerecho(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i + j >= this.columnas - 1) { 
                this.matriz[i][j] = 1;  
            }
        })
        this.dibujarMatriz();
    }

    //Ejercicio #11
    llenarConCuadricula() {
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        })
        this.dibujarMatriz();
    }

    //Ejercicio #12
    llenarTrianguloCentral(){
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
            for (let i = 0; i < alturaPiramide; i++) {
        const inicio = centro - i;
        const fin = centro + i;
            for (let j = 0; j < this.columnas; j++) {
            if (j >= inicio && j <= fin) {
            this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
            } else {
            this.matriz[i][j] = 0; // Resto en 0
            }
        }
    }
        this.dibujarMatriz();
    }

    //Ejercicio #13
    llenarConRombosConcentricos(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (Math.abs(i - j) <= Math.floor(this.columnas / 2) || Math.abs(i + j) <= Math.floor(this.columnas / 2)) {
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #14
    llenarConCrucesConcentricas(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if ((j == 0 && i > 1 && i < this.filas - 2) || (j == this.columnas - 1 && i > 1 && i < this.filas - 2) || j == 2 || j == this.columnas - 3){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }

    //Ejercicio #15
    llenarConBanderaDiagonal(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i >= j ){
                this.matriz[i][j] = 1;
            }
        })
        this.dibujarMatriz();
    }

    //Ejercicio #16
    llenarCuadradoalCuadrado(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
                }else if ((i >= 2 && i <= this.filas - 3) && (j >= 2 && j <= this.columnas - 3)) {
                if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                    this.matriz[i][j] = 2;
                    } else {
                    this.matriz[i][j] = 0;
                    }
                }
                else {
                    this.matriz[i][j] = 0;
                }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #17
    llenarBordesyCentro(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                this.matriz[i][j] = 2;
            } else {
                this.matriz[i][j] = 0;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #18
    llenarConLineasParalelas(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (i % 2 === 0) {
                this.matriz[i][j] = 1;
            } 
            while (j % 2 === 0) {
                this.matriz[i][j] = 1;
                break;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio #19
    llenarConDiagonalesCiclicas(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            this.matriz[i][j] = (i % 4 === j % 4) ? 1 : 0;
        })
        this.dibujarMatriz();
    }

    //Ejercicio 20
    llenarConRombosEnLasEsquinas() {
        this.vaciarMatriz(); // Limpia la matriz antes de llenarla
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        this.iterarMatriz((i, j) => {
            // Dibuja los bordes de la matriz con el valor 2
            if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
                this.matriz[i][j] = 2;
            }
    
            // Dibuja las diagonales principales con el valor 1
            if (i === j || i + j === columnas - 1) {
                this.matriz[i][j] = 1;
            }
    
            // Dibuja las esquinas con el valor 3
            if (
                (i === 0 && j === 0) || // Esquina superior izquierda
                (i === 0 && j === columnas - 1) || // Esquina superior derecha
                (i === filas - 1 && j === 0) || // Esquina inferior izquierda
                (i === filas - 1 && j === columnas - 1) // Esquina inferior derecha
            ) {
                this.matriz[i][j] = 3;
            }
        });
        this.dibujarMatriz();
    }
    //Ejercicio 21
    rellenoDeAjedrez(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if ((i + j) % 2 == 0) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        })
        this.dibujarMatriz();
    }
    //Ejercicio 22
    llenarRelojDeArena(){
        this.vaciarMatriz()
        this.iterarMatriz((i, j) =>{
            if (j >= i && j < this.columnas - i || j >= this.columnas - i - 1 && j <= i) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        })
        this.dibujarMatriz();
    }
    

}