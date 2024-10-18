class tank {
    posX;
    posY;
    direccion_disparo;
    vidas;

    constructor(_posX, _posY, _direccion_disparo, _vidas){
        this.posX = _posX;
        this.posY = _posY;
        this.direccion_disparo = _direccion_disparo;
        this.vida = _vida;
    }


    move_left(){

    }

    move_right(){

    }

    move_up(){

    }

    move_down(){

    }

    rotar_tank(_direccion_disparo){
        this.direccion_disparo = _direccion_disparo;
        
    }

}