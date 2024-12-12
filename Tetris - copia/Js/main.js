import {BoardTetris} from './boardTetris.js'
//import {Tetromino, TetrominoTypes} from './tetromino.js'
//import { Game } from './game.js'

const canvasTetris = document.getElementById('canvas-tetris');
//const canvasNext = document.getElementById('canvas-next');
//const canvasHold = document.getElementById('canvas-hold');
//const score = document.getElementById('score');
//const menu = document.getElementById('menu');
//const btnMenu = document.getElementById('btn-start');

const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

//canvasTetris.width = cols * (cellSize + space);  
//canvasTetris.height = rows * (cellSize + space);



const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);
//const game = new Game(canvasTetris, rows, cols, cellSize, space, canvasNext, canvasHold);


//const tetromino = new Tetromino(canvasTetris, cellSize, TetrominoTypes.shapes, TetrominoTypes.initPosition, TetrominoTypes.id);

function update() {
//    if(game.gameOver){
        //menu.style.display ="flex";
//    } else {
//        game.update();
        //score.innerHTML = game.score;
    //}

    boardTetris.draw();
    //tetromino.draw(boardTetris);

    requestAnimationFrame(update); 
}


//btnMenu.addEventListener("click", () => {
 //   setTimeout(() => {
   //     menu.style.display = "none";
     //   game.start(); 
    //}, 200);
//});

update();

 