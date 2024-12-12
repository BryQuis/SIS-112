import {BoardTetris} from './boardTetris.js'
import {Tetromino, TetrominoTypes} from './tetromino.js'
import { Game } from './game.js'

const canvasNext = document.getElementById('canvas-tetris');
const canvasTetris = document.getElementById('canvas-next');
const canvasHold = document.getElementById('canvas-hold');
const score = document.getElementById('score');
const menu = document.getElementById('menu');
const btnMenu = document.getElementById('btn-start');

const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

canvasNext.width = cols * (cellSize + space);  
canvasNext.height = rows * (cellSize + space);


const boardTetris = new BoardTetris(canvasNext, rows, cols, cellSize, space);
const game = new Game(canvasTetris, rows, cols, cellSize, space, canvasTetris, canvasHold);


const tetromino = new Tetromino(canvasNext, cellSize, TetrominoTypes.shapes, TetrominoTypes.initPosition, TetrominoTypes.id);

function update() {
    if(game.gameOver){
        menu.style.display ="flex";
    } else {
        game.update();
        score.innerHTML = game.score;
    }

    boardTetris.draw(canvasNext);
    tetromino.draw(boardTetris);

    requestAnimationFrame(update); 
}


btnMenu.addEventListener("click", () => {
    setTimeout(() => {
        menu.style.display = "none";
        game.start(); 
    }, 200);
});

update();

 