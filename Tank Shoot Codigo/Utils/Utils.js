class Utils {

    Redondear(number) {
        return Math.round(number) ;
    }

    

    //Redondea el lado del tablero al multiplo de 50 para que sea multiplo de 50
    RoundTablero (lado){
        return Math.round(lado / 50) * 50; 

    //ejemplo de uso 
    //Antes 
    //canvas.height = Math.round(canvas.height/50) * 50;

    //Ahora 
    //canvas.height = Utils.RoundTablero(canvas.height);
    }
}