
//seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
var utilsObj = new Utils();

//funcion para ajustar el tamaño del cmavas a la ventana
function resizeCanvas(){
    
    canvas.width = window.innerWidth * 0.9 ;
    canvas.height = window.innerHeight * 0.9;
    //Operacion para que el canvas se ajuste a cualquier pantalla y sea multiplo de 50
    
    canvas.width = utilsObj.RoundTablero(canvas.width);
    canvas.heigth = utilsObj.RoundTablero(canvas.heigth);
    //Funcion para mostrar los tamaños del canvas
    console.log("width", canvas.width)
    console.log("height", canvas.height)

}

//Llamamos a la función al cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto del juego
const game = new Game(canvas.width, canvas.height, "start");

//Creamos un tanque del jugador y un tanque del enemigo
const playerTank = new tank (1300, 100, "up", 3, game.ancho, game.alto);
const enemyTank = new EnemyTank (500, 500, "down", 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank (750, 500, "down", 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank (300, 500, "down", 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank (900, 500, "down", 3, game.ancho, game.alto);
const enemyTank5 = new EnemyTank (100, 500, "down", 3, game.ancho, game.alto);
const enemyTank6 = new EnemyTank (400, 500, "down", 3, game.ancho, game.alto);



//Función para activar las teclas del teclado y mover al tanque con estas
window.addEventListener("keydown", function (e){
    //Mover las flechitas
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
            playerTank.move_left();
            break;
        case "d":
            playerTank.move_right();
            break;
        case "w":
            playerTank.move_up();
            break;
        case "s":
            playerTank.move_down();
            break;
        
    }

})


//Movimiento Random del tanque enemigo

function moveEnemyTankRandom(enemyTank){
    const directions = ["up", "down", "left", "right"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];  //Investigar los metodos matematicos usados

    //Movemos el tanque enemigo en la direccipon elegida
    switch (randomDirection){
        case "up":
            enemyTank.move_up();
            break;
        case "down":
            enemyTank.move_down();
            break;
        case "left":
            enemyTank.move_left();
            break;
        case "right":
            enemyTank.move_right();
            break;
    }
}

//Actualizamos la posicion del tanque enemigo cada 100 ms  (Luego podemos separar para que distintos tanques tengan distintas velocidades)

setInterval(() =>{
    moveEnemyTankRandom(enemyTank);
    moveEnemyTankRandom(enemyTank2);
    moveEnemyTankRandom(enemyTank3);
    moveEnemyTankRandom(enemyTank4);
    moveEnemyTankRandom(enemyTank5);
    moveEnemyTankRandom(enemyTank6); 
}, 2000)


const escenario = [
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],
    [1, 2, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 1, ],


];

const cellsize = 50 // Tamaño de la celda en pixeles

function drawEscenario(ctx, escenario) {
    for (let row = 0; row < escenario.length; row ++) {
        for (let col = 0; col < escenario[row].length; col ++){
            const cell = escenario [row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;

            switch(cell) {
                case 0: //espacio vacio
                    ctx.fillStyle = "black";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1: //pared
                    ctx.fillStyle = "gray";
                   ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                   //var wall = new Image();
                   //wall.src = "./assets/pared.webp";
                   //ctx.drawImage(wall, x, y, cellSize, cellSize);
                   break;
                default:
                    break;

            }
        }
    }
}


//Logica del juego (actualizamos la pantalla)
function updateGame (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawEscenario(ctx,escenario);
    playerTank.drawTank(ctx); //Dibujamos el tanque del jugador
    enemyTank.drawEnemyTank(ctx);
    enemyTank2.drawEnemyTank(ctx); 
    enemyTank3.drawEnemyTank(ctx); 
    enemyTank4.drawEnemyTank(ctx); 
    enemyTank5.drawEnemyTank(ctx); 
    enemyTank6.drawEnemyTank(ctx); 

    
    //Refrescar los graficos
    requestAnimationFrame(updateGame);
}



//Iniciamos el juego
 updateGame();
