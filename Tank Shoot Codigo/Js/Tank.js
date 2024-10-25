class tank {
    posX;
    posY;
    direccion_disparo;
    vidas;

    constructor(_posX, _posY, _direccion_disparo, _vida){
        this.posX = _posX;
        this.posY = _posY;
        this.direccion_disparo = _direccion_disparo;
        this.vida = _vida;
        this.velocidad = 50;
    }


    move_left(){
            this.posX = this.posX - this.velocidad;
    }

    move_right(){
        this.posX = this.posX + this.velocidad;
    }

    move_up(){
        this.posY -= this.velocidad; 
    }

    move_down(){
        this.posY += this.velocidad; 
    }

    rotar_tank(_direccion_disparo){
        this.direccion_disparo = _direccion_disparo;
        
    }

}