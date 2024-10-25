//Clase para los obstaculos del juego
class Obstacle{
    nombre ;
    tipo;
    src;
    posx;
    posy;

    constructor(_nombre, _tipo, _src, _posx, _posy){
        this.nombre = _nombre;
        this.tipo = _tipo;
        this.src = _src;
        this.posx = _posx;
        this.posy = _posy;
    }
}