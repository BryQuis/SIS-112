import { Grid } from './grid.js';
export class BoardTetris extends Grid{
    constructor(canvas, rows, cols, cellSize, space) {
        super(canvas, rows, cols, cellSize, space);
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.rows = rows;
            this.cols = cols;
            this.cellSize = cellSize;
            this.space = space;
            this.matriz = this.createEmptyBoard();
    } 

    isInside(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    isEmpty(row, col) {
        return this.isInside(row, col) && this.matriz[row][col] === 0;
    }
    

    isRowFull(row) {
        return this.matriz[row].every(element => element !== 0);
    }

    isRowEmpty(row) {
        return this.matriz[row].every(element => element === 0);
    }

    clearRow(row) {
        this.matriz[row].fill(0); 
    }

    moveRowDown(row, numRows) {
       if(row + numRows < this.rows) {
            this.matriz[row + numRows] = this.matriz[row].slice();
            this.clearRow(row);
        }
    }

    clearFullRow() {
        let rowsCleared = 0;
        // Recorre las filas de la matriz
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.matriz[row].every(cell => cell !== 0)) {
                this.matriz.splice(row, 1);  // Elimina la fila
                this.matriz.unshift(new Array(this.cols).fill(0));  // Añade una fila vacía al principio
                rowsCleared++;  // Incrementa el contador de filas eliminadas
            }
        }
        return rowsCleared;  // Retorna la cantidad de filas limpiadas
    }
    

    gameOver() {
        return this.matriz[0].some(cell => cell !== 0);
    }
    

    createEmptyBoard() {
        return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpiar el canvas

        // Dibujar las celdas de la cuadrícula
        this.ctx.strokeStyle = "#ccc"; // Color de las líneas de la cuadrícula
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const x = col * (this.cellSize + this.space);  // Calcula la posición en el eje X
                const y = row * (this.cellSize + this.space);  // Calcula la posición en el eje Y
                this.ctx.strokeRect(x, y, this.cellSize, this.cellSize);  // Dibuja la celda
            }
        }
    }

    getCoordinates(column, row) {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.cols) {
            return null;  // Evita acceder a posiciones fuera del tablero
        }
        const x = column * this.cellSize;
        const y = row * this.cellSize;
        return { x, y };  // Devuelve las coordenadas X e Y basadas en la posición de la celda
    }
}

export class BoardHold extends Grid {
    constructor(canvas, rows, cols, cellSize, space) {
        super(canvas, rows, cols, cellSize, space);
        this.tetromino = null;
        this.updateMatriz();
    }

    updateMatriz() {
        this.restartMatriz();
        if (this.tetromino == null) return;

        const shape = this.tetromino.currentShape();
        for (let i = 0; i < shape.length; i++) {
            const row = shape[i].row;
            const column = shape[i].column;

            // Verifica que las posiciones estén dentro de los límites de la matriz
            if (row >= 0 && row < this.rows && column >= 0 && column < this.cols) {
                this.matriz[row][column] = this.tetromino.id;
            }
        }
    }
}

export class BoardNext extends Grid {
    constructor(canvas, rows, cols, cellSize, space, listaTetrominos) {
        super(canvas, rows, cols, cellSize, space);
        this.listaTetrominos = listaTetrominos;
        this.updateMatriz();
    }

    updateMatriz() {
        this.restartMatriz();
        let cont = 0; // Desplazamiento vertical para los tetrominos
        for (let i = 0; i < this.listaTetrominos.length; i++) {
            const shape = this.listaTetrominos[i].currentShape();
            for (let j = 0; j < shape.length; j++) {
                const row = shape[j].row + cont;
                const column = shape[j].column;

                // Verifica que las posiciones estén dentro de los límites de la matriz
                if (row >= 0 && row < this.rows && column >= 0 && column < this.cols) {
                    this.matriz[row][column] = this.listaTetrominos[i].id;
                }
            }

            // Ajustar `cont` para no desbordar la matriz
            cont += Math.max(...shape.map((block) => block.row)) + 1; // Desplaza basado en el tamaño del tetromino
        }
    }
}
