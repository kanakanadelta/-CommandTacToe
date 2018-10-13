//TIC TAC TOE//

class Game {
  constructor(firstPlayer, secondPlayer) {
    this.player1 = firstPlayer; //X
    this.player2 = secondPlayer; //O
    this.winner = null;

    this.turn =  this.player1;
    this.cursor = 'X';

    this.board = [
      [' ',' ',' '],
      [' ',' ',' '],
      [' ',' ',' ']
      ];
  }

  showBoard() {
   console.log(` ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} \n―――――――――――\n ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} \n―――――――――――\n ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} `);
  }

  move(row,column) {
    ////////////
    //player1//
    if (this.turn === this.player1 && this.board[row][column] === ' ') {
      this.board[row][column] = this.cursor
      //check winner
      this.checkWin(row, column);
      //change turns
      this.turn = this.player2;
      this.cursor = 'O'
    }
    ////////////
    //player2//
    if (this.turn === this.player2  && this.board[row][column] === ' ') {
      this.board[row][column] = this.cursor;
      //check winner
      this.checkWin(row, column);
      //change turns
      this.turn = this.player1;
      this.cursor = 'X'
    }
    if(!this.winner){
      console.log(`${this.turn}'s turn.`)
    }
  }

  checkWin(row, column) {
    //show board first
    this.showBoard()

    if (this.board[row][0] === this.cursor && 
        this.board[row][1] === this.cursor && 
        this.board[row][2] === this.cursor) {
        this.winner = this.turn;
    }
    if (this.board[0][column]  === this.cursor && 
        this.board[1][column] === this.cursor && 
        this.board[1][column] === this.cursor) {
        this.winner = this.turn;
    }
    if (this.winner) {
      console.log(`${this.turn} wins!`); 
    }
  }

//end of class
}
