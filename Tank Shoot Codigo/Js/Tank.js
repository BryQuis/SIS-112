// Clase del tanque 
class tank {
    posX;
    posY;
    direccion_disparo;
    vidas;
    velocidad
    anchoMapa;
    altoMapa;

    constructor(_posX, _posY, _direccion_disparo, _vida, _anchoMapa, _altoMapa){
        this.posX = _posX;
        this.posY = _posY;
        this.direccion_disparo = _direccion_disparo;
        this.vida = _vida;
        this.anchoMapa = _anchoMapa; //Datos heredados del interfaz para evitar que el tanque se salga
        this.altoMapa = _altoMapa;   //Datos heredados del interfaz para evitar que el tanque se salga
        this.velocidad = 100;     //Dato que indica cuanto se mueve el tanque
    }

    //movimientos posibles del tanque 
    move_left(){
        if (this.posX - this.velocidad >= 0){    
        this.posX = this.posX - this.velocidad;
        }
    }

    move_right(){
        if (this.posX + this.velocidad <= this.anchoMapa - 50){
            this.posX = this.posX + this.velocidad;
        }
    }

    move_up(){
        if (this.posY - this.velocidad >= 0){
            this.posY -= this.velocidad; 
        }
    }

    move_down(){
        if (this.posY + this.velocidad <= this.altoMapa - 50){
            this.posY += this.velocidad; 
        }
    }


    rotar_tank(_direccion_disparo){
        this.direccion_disparo = _direccion_disparo;
        
    }

    //Dibujamos los elementos en el canvas
    drawTank(ctx){
    ctx.fillStyle = "green";  // Aqui se modifica el color de los tanques
    //representamos el tanque como un cuadrado
    ctx.fillRect(this.posX, this.posY, 50, 50);  //Aqui se modifica el tamaño de los tanques

}

}