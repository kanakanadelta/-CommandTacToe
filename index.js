//TIC TAC TOE//

const NewGame = (firstPlayer, secondPlayer) => {
  this.player1 = firstPlayer; //X
  this.player2 = secondPlayer; //O
  this.winner = null;

  this.turn =  player1;
  this.cursor = 'X';

  this.board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ];
}

ticTacToe.prototype.showBoard = () => {
  console.log(`${this.board}`);
}

ticTacToe.prototype.move = (row,column) => {
  ////////////
  //player1//
  if (this.turn === player1 && this.board[row][column] === ' ') {
    this.board[row][column] = this.cursor
    //check winner
    this.checkWin();
    //change turns
    this.turn = player2;
    this.cursor = 'O'
    console.log(`${this.player}'s turn.`)
  }
  ////////////
  //player2//
  if (this.turn === player2  && this.board[row][column] === ' ') {
    this.board[row][column] = this.cursor;
    //check winner
    this.checkWin();
    //change turns
    this.turn = player1;
    this.cursor = 'X'
    console.log(`${this.player}'s turn.`)
  }
}

ticTacToe.prototype.checkWin = (row, column) => {
  //show board first
  this.showBoard()

  if(this.board[row][0] === this.cursor && this.board[row][1] === this.cursor && this.board[row][2] === this.cursor) {
    console.log(`${this.player} wins!`)
  }
  if(this.board[0][column]  === this.cursor && this.board[1][column] === this.cursor && this.board[1][column] === this.cursor) {
    console.log(`${this.player} wins!`)
  }
}


