import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  next: string = "X"; //sıradaki hangisiyse
  result: string = ""; //sonucu temsil eder
  winners: number[] = [];
  games: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  
  setMark(index: number) { //hangi butona tıkladığımı bilmek için
    if (this.games[index] == "" && this.result == "") { //boş ise bu işlemiyap
      this.games[index] = this.next;

    this.checkGameResult();

    this.checkIfGameFinish();

    if (this.result != "") {
      return;
    }

    if (this.next == "X")
      this.next = "0"
    else
      this.next = "X"
  }
}

  newGame() {
    this.next = "X";
    this.result = "";
    this.winners=[];
    for (let i = 0; i < this.games.length; i++) {
      this.games[i] = "";
    }
  }

  checkGameResult() {
    if (this.games[0] != "" && this.games[0] == this.games[1] && this.games[1] == this.games[2]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(0, 1, 2);
    }
    else if (this.games[3] != "" && this.games[3] == this.games[4] && this.games[4] == this.games[5]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(3, 4, 5);
    }
    else if (this.games[6] != "" && this.games[6] == this.games[7] && this.games[7] == this.games[8]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(6, 7, 8);
    }
    else if (this.games[0] != "" && this.games[0] == this.games[4] && this.games[4] == this.games[8]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(0, 4, 8);
    }
    else if (this.games[2] != "" && this.games[2] == this.games[4] && this.games[4] == this.games[6]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(2, 4, 6);
    }
    else if (this.games[0] != "" && this.games[0] == this.games[3] && this.games[3] == this.games[6]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(0, 3, 6);
    }
    else if (this.games[1] != "" && this.games[1] == this.games[4] && this.games[4] == this.games[7]) {
      this.result = `$(this.next) won the game!`;
      this.winners.push(1, 4, 7);
    }
    else if (this.games[2] != "" && this.games[2] == this.games[5] && this.games[5] == this.games[8]) {
      this.result = `$(this.next) won the game!`; 
      this.winners.push(2, 5, 8);
    }
  }

  checkWinnerButtonClass(index: number) {
    if (this.winners.includes(index))
      return "btn btn-success button";
    else
      return "btn btn-primary button";
  }

  checkIfGameFinish() {
    let isFinish = false;
    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i] == "")
        return;
      else
        isFinish = true;
    }

    if (isFinish) {
      this.result = "The game ended in a draw!"
    }
  }

  checkResultClass() {
    if (this.result != "" && this.result == "The game ended in a draw!")
      return "alert alert warning";
    else
      return "alert alert success";
  }
}

