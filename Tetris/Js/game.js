import {TetrominosBag} from './tetromino.js'
import {BoardTetris,BoardNext, BoardHold} from './boardTetris.js'
import {Position} from './tetromino.js'
export class Game {
    constructor(canvas, rows, cols, cellSize, space,canvasNext, canvasHold) {
        this.boardTetris = new BoardTetris(canvas, rows, cols, cellSize, space);
        this.tetrominosBag = new TetrominosBag(canvas, cellSize);

        // Define las formas y la posición inicial antes de crear el Tetromino
        const shapes = [
            [ { row: 0, column: 0 }, { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 } ],  // Cuadrado
            [ { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 } ]   // T
        ];
        const initPosition = new Position(0, Math.floor(cols / 2));

        this.currentTetromino = this.tetrominosBag.nextTetromino();
        this.lastTime = 0;
        this.lastTime2 = 0;
        this.keys = {up:false,down:true};
        this.keyboard();

        this.next = new BoardNext(canvasNext, 8, 4, cellSize, space, this.tetrominosBag.getNextThreeTetrominos());
        this.hold = new BoardHold(canvasHold, 2, 4, cellSize, space);
        this.canHold = true; 

        this.score = 0;
        this.gameOver = false;
        
    }

    // Resto del código permanece igual
    update() {
        let currentTime = Date.now();
        let deltaTime = currentTime - this.lastTime;
        let deltaTime2 = currentTime - this.lastTime2;

        if(deltaTime >= 1000                                                                                                    ){
            this.autoMoveTetrominoDown();
            this.lastTime = currentTime;
        }

        if (deltaTime2 >= 50){
            this.boardTetris.draw();
            this.drawTetrominoGhost(); 
            this.currentTetromino.draw(this.boardTetris);

            this.next.draw2();

            if(this.keys.down){
                this.moveTetrominoDown();
            }


            this.hold.draw2();

            this.lastTime2 = currentTime;
        }
        
    }
    
     

    autoMoveTetrominoDown() {
        this.currentTetromino.move(1, 0);
        if(this.blockedTetromino()) {
            this.currentTetromino.move(-1, 0);
            this.placeTetromino();
        }
    }

    blockedTetromino() {
        const tetrominoPositions = this.currentTetromino.currentPositions();
        for (let i = 0; i < tetrominoPositions.length; i++) {
            if(!this.boardTetris.isEmpty(tetrominoPositions[i].row, tetrominoPositions[i].column)){
                return true;
            }
        }
        return false;
    }

    moveTetrominoLeft() {
        this.currentTetromino.move(0, -1);
        if(this.blockedTetromino()){
            this.currentTetromino.move(0, 1);
        }
    }

    moveTetrominoRight() {
        this.currentTetromino.move(0, 1);
        if(this.blockedTetromino()){
            this.currentTetromino.move(0, -1);
        }
    }

    moveTetrominoDown() {
        this.currentTetromino.move(1, 0);
        if(this.blockedTetromino()){
            this.currentTetromino.move(-1, 0);
        }
    }
    start() {
        this.gameOver = false;
        this.score = 0;
        // Reiniciar el tablero y otros parámetros del juego
        this.boardTetris.restartMatriz();
        this.currentTetromino = this.tetrominosBag.nextTetromino(); 
        this.next.listaTetrominos = this.tetrominosBag.getNextThreeTetrominos(); // Actualiza la lista de próximos Tetrominos
        this.next.updateMatriz();
        this.next.draw2();
    }
    

    rotationTetrominoCW() {
        this.currentTetromino.rotation++;
        if (this.currentTetromino.rotation > this.currentTetromino.shapes.length - 1){
            this.currentTetromino.rotation = 0;
        }
        if (this.blockedTetromino()){
            this.rotationTetrominoCCW();
        }
    }
    

    rotationTetrominoCCW() {
        this.currentTetromino.rotation--;
        if (this.currentTetromino.rotation < 0){
            this.currentTetromino.rotation = this.currentTetromino.shapes.length - 1;
        }
        if (this.blockedTetromino()){
            this.rotationTetrominoCW();
        }
    }
    placeTetromino() {
        const tetrominoPositions = this.currentTetromino.currentPositions(); // Esto obtiene las posiciones actuales del tetromino
        if (!tetrominoPositions) {
            console.error("No se pudieron obtener las posiciones del Tetromino");
            return;
        }
        
    
        for (let i = 0; i < tetrominoPositions.length; i++) {
            this.boardTetris.matriz
                [tetrominoPositions[i].row]
                [tetrominoPositions[i].column] = this.currentTetromino.id; // Coloca el Tetromino en la matriz del tablero
        }
        
        this.score += this.boardTetris.clearFullRow()*10;
        
        
        this.boardTetris.clearFullRow();
    
        if (this.boardTetris.gameOver()) {
            setTimeout(() => {
                this.gameOver = true;
            }, 500);


            return true;
        } else {
            this.currentTetromino = this.tetrominosBag.getNextTetromino(); 
            this.next.listaTetrominos = this.tetrominosBag.getNextThreeTetrominos();
            this.next.updateMatriz();
            this.canHold = true; 
        }
    }
    
    
    currentPositions() {
        const shape = this.currentTetromino.getShape();
        return shape.map(block => ({
            row: this.currentTetromino.position.row + block.row,
            column: this.currentTetromino.position.column + block.column
        }));
    }
    
    

    dropDistance(position){
        let distance = 0;
        while(this.boardTetris.isEmpty(position.row + distance  + 1, position.column)) {
            distance++;
        }
        return distance;
    }

    tetrominoDropDistance(){
        let drop = this.boardTetris.rows;
        const tetrominoPositions = this.currentTetromino.currentPositions();
        for (let i = 0; i < tetrominoPositions.length; i++) {
            drop = Math.min(drop, this.dropDistance(tetrominoPositions[i]));
        }
        return drop;
    }

    drawTetrominoGhost(){
        const dropDistance = this.tetrominoDropDistance();
        const tetrominoPositions = this.currentTetromino.currentPositions();
        for (let i = 0; i < tetrominoPositions.length; i++){
            let position = this.boardTetris.getCoordinates(
                tetrominoPositions[i].column,
                tetrominoPositions[i].row + dropDistance
            );
            // draw block
            this.boardTetris.drawSquere(position.x, position.y, this.boardTetris.cellSize, "#000", "white", 20);
        }
    }
    dropBlock() {
        const dropDistance = this.tetrominoDropDistance();
        if (dropDistance > 0) {
            this.currentTetromino.move(dropDistance, 0);
            this.placeTetromino();
        }
    }
    

    holdTetromino(){
        if(!this.canHold) return;
        if(this.hold.tetromino === null){
            this.hold.tetromino = this.currentTetromino;
            this.currentTetromino= this.tetrominosBag.nextTetromino();
        }else{
            [this.currentTetromino, this.hold.tetromino] = [this.hold.tetromino, this.currentTetromino];
        }
        this.hold.updateMatriz();
        this.canHold = false;
    }

    reset(){
        this.gameOver = false;
        this.boardTetris.restartMatriz();
        this.score = 0;
        this.hold.tetromio = null;
        this.tetrominosBag.reset();
        this.currentTetromino = this.tetrominosBag.getNextTetromino(); 

        this.canHold = true;
        this.hold.restartMatriz();
        this.next.restartMatriz();
        this.next.listaTetrominos = this.tetrominosBag.getNextThreeTetrominos();
        this.next.updateMatriz();
        this.next.draw2(); 
        }

    keyboard() {
        window.addEventListener("keydown", (evt) => {
            if (evt.key === "ArrowLeft") {
                this.moveTetrominoLeft();
            }
            if (evt.key === "ArrowRight") {
                this.moveTetrominoRight();
            }
            if (evt.key === "ArrowUp" && !this.keys.up) {
                this.rotationTetrominoCW();
                this.keys.up = true;
            }
            if (evt.key === "ArrowDown" && !this.keys.down) {
                this.keys.down = true;
                this.moveTetrominoDown(); // Mueve el tetromino hacia abajo solo si no está siendo repetido
            }
            if(evt.key === " ") {
                this.holdTetromino();
            }
        });
    
        window.addEventListener("keyup", (evt) => {
            if (evt.key === "ArrowUp") {
                this.keys.up = false;
            }
            if (evt.key === "ArrowDown") {
                this.keys.down = false;
            }
        });
        window.addEventListener("click",()=>{
            if(!this.gameOver){
                this.dropBlock();
            }
        });
    }
    
    
}


