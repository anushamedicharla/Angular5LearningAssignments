import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private incCount = 0;
  private ref;
  private gameStarted = false;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameStarted = true;
    this.ref = setInterval(() => {
      this.incCount++;
    }, 1000);
  }

  endGame() {
    this.gameStarted = false;
    clearInterval(this.ref) ;
  }

  resetGame() {
    this.incCount = 0;
  }

}
