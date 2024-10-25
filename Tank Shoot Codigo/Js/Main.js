
//seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");

//funcion para ajustar el tamaño del cmavas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9 ;
    canvas.height = window.innerHeight * 0.9;

}

//Llamamos a la función al cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto del juego
const game = new Game(canvas.width, canvas.height, "start");

//Creamos un tanque del jugador y un tanque del enemigo
const playerTank = new tank (100, 100, "up", 3);
const enemyTank = new EnemyTank (500, 500, "down", 3);

//Dibujamos los elementos en el canvas
function drawTank(tank){
    ctx.fillStyle = "green";
    //representamos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50);

}
function drawEnemyTank(enemyTank){
    ctx.fillStyle = "red";
    //representamos el tanque como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);

}

window.addEventListener("keydown", function (e){
    switch(e.key){
        case "ArrowLeft":
            playerTank.move_left();
            break;
        case "ArrowRight":
            playerTank.move_right();
            break;
        case "ArrowUp":
            playerTank.move_up();
            break;
        case "ArrowDown":
            playerTank.move_down();
            break;
        default:
            break;
        //Ahora las letras del teclado
        case "a":
            playerTank.rotar_tank("left");
            break;
        case "d":
            playerTank.rotar_tank("right");
            break;
        case "w":
            playerTank.rotar_tank("up");
            break;
        case "s":
            playerTank.rotar_tank("down");
            break;
    }

})

//Logica del juego (actualizamos la pantalla)
function updateGame (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(playerTank); //Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank); //Dibujamos el tanque del enemigo

    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}



//Iniciamos el juego
 updateGame();
