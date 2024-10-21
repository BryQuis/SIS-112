
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

//Logica del juego (actualizamos la pantalla)
function updateGame (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(playerTank); //Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank); //Dibujamos el tanque del enemigo

    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}

 //Manejamos las teclas para mover el tanque del jugador
 document.addEventListener('keydown', function(event){
    if(event.key === "ArrowUp"){
        playerTank.move("up");
    }
    if(event.key === "ArrowDown"){
        playerTank.move("down");
    }
    if(event.key === "ArrowLeft"){
        playerTank.move("left");
    }
    if(event.key === "ArrowRight"){
        playerTank.move("right");
    }
});

//Iniciamos el juego
 updateGame();
