//import {Tetromino} from './tetromino.js'
export class Grid {
    
    constructor(canvas, rows, cols, cellSize, space) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = [];
        this.restartMatriz();

        this.canvas.width = this.cols * this.cellSize + (this.cols * this.space);
        this.canvas.height = this.rows * this.cellSize + (this.rows * this.space);

        //t his.block = new Tetromino(this.canvas, this.cellSize)
        
    } 
    restartMatriz(){
        for (let r = 0; r < this.rows; r++) {
            this.matriz[r] = [];
            for (let c = 0; c < this.cols; c++) {
                this.matriz[r][c] = 0;
                
            }
            
        }
    }
    drawSquere(x, y, side, color, bordeColor, border = 10){
        const bordeSize = side / border;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, side, side);

        this.ctx.strokeStyle = bordeColor;
        this.ctx.lineWidth = bordeSize;
        this.ctx.strokeRect(x + bordeSize / 2, y + bordeSize / 2, side- bordeSize, side - bordeSize);
    }
    getCoordinates(col, row){
        return {x: col * (this.cellSize + this.space), y: row * (this.cellSize + this.space)}
    }

    draw(){
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const position = this.getCoordinates(c, r);
                this.drawSquere(position.x, position.y, this.cellSize, "#000", "#303030", 10);

                //if (this.matriz[r][c] != 0 ){
                    //this.block.drawBlock(position.x, position.y, this.matriz[r][c]);
                //}else{
                   // this.drawSquere(position.x, position.y, this.cellSize, "#000", "#303030", 10);
                //}
            }   
        }
        this.printMatriz();
    }
    //draw2 (){
      //  for (let r = 0; r < this.rows; r++) {
        //    for (let c = 0; c < this.cols; c++) {
          //      const position = this.getCoordinates(c, r);
            //    if (this.matriz[r][c] != 0 ){
              //      if(this.matriz[r][c] === 2){
                //        this.block.drawBlock(position.x + this.cellSize, position.y, this.matriz[r][c]);
                  //  }else if(this.matriz[r][c] === 3){
                    //    this.block.drawBlock(position.x, position.y, this.matriz[r][c]);
 //                   }else{
   //                     this.block.drawBlock(position.x + this.cellSize/2, position.y, this.matriz[r][c]);
     //               }
       //         }
         //   }
//        }
  //  }
//    drawBackground(){
  //          this.ctx.fillstyle = "black";
    //        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    //    }
    printMatriz() {
    let text = "";
    this.matriz.forEach((row) => {
        text += row.join(" ") + "\n"; // Asegúrate de que "\n" esté entre comillas dobles
    });
    console.log(text); // Esto imprimirá la matriz en formato de texto en la consola
}

}
