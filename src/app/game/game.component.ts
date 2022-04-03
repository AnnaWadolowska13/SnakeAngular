import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgxSnakeComponent } from 'ngx-snake';
import { HighscoresService } from '../highscores.service';
import { StorageService } from '../storage.service';

export interface Move{
  move: string,
  time: number,
}

export interface UserInfo{
    user: {
      name: string,
      email:string
    }
    gameStatus: string,
    score: number,
    timer: number
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
  
export class GameComponent implements OnInit {
  @ViewChild(NgxSnakeComponent) public _snake!: NgxSnakeComponent;
  public timerInterval!: any;
  public movesList: Array<Move> = [];
  public movesTypes: Array<string> = ['right', 'left', 'up', 'down', 'score', 'game ended', 'game paused', 'game started'];
  public selectedType: string = "all";
  public sortType: string = "old";
  public highscores: any = [];
  public displayMoves: boolean = false;
  public displayHighScores: boolean = false;
  

  public userInfo: UserInfo = {
    user: {
      name: "",
      email: ""
    },
    gameStatus: 'ready',
    score: 0,
    timer: 0
  }

  constructor(private _storage: StorageService, private router: Router, private _highscores: HighscoresService) {
    if (this._storage.isUserLogin()) {
      this.userInfo.user = this._storage.readUser();
    } else {
      this.router.navigate(["intro"]);
    }
    this._highscores.load().subscribe((result) => {
      this.highscores = result;
      console.log(this.highscores)
    })
  }
  ngOnInit(): void {

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
  switch (event.keyCode) {
    case 37:
      this.onLeftButtonPressed();
      break;
    case 38:
      this.onUpButtonPressed();
      break;
    case 39:
      this.onRightButtonPressed();
      break;
    case 40:
      this.onDownButtonPressed();
      break;
    }
  }

  public controllerClick(buttonType:string):void {
    switch (buttonType) {
      case "start":
        this.onStartButtonPressed();
        break;
      case "stop":
        this.onStopButtonPressed();
        break;
      case "reset":
        this.onResetButtonPressed();
        break;
      case "up":
        this.onUpButtonPressed();
        break;
      case "left":
        this.onLeftButtonPressed();
        break;
      case "right":
        this.onRightButtonPressed();
        break;
      case "down":
        this.onDownButtonPressed();
        break;
    }
  }

  public foodEaten() {
    this.userInfo.score++;
    this.movesList.push({
      move: "score: "+ this.userInfo.score,
      time: this.userInfo.timer,
    })
  }
  public onStartButtonPressed() {
    if (this.userInfo.gameStatus !== "paused") {
      this.onResetButtonPressed();
    }
    this.userInfo.gameStatus = "started";
    this.timerInterval = setInterval(() => {
      this.userInfo.timer++;
    }, 1000);
    this.movesList.push({
      move: "game started",
      time: this.userInfo.timer,
    })
    this._snake.actionStart();
  }
  public onStopButtonPressed() {
    if (this.userInfo.gameStatus === "started") {
      clearInterval(this.timerInterval);
      this.userInfo.gameStatus = "paused";
      this._snake.actionStop();
      this.movesList.push({
        move: "game paused",
        time: this.userInfo.timer,
      })
    }

  }
  public onResetButtonPressed() {
    clearInterval(this.timerInterval);
    this.movesList = [];
    this.userInfo.gameStatus = "ready";
    this.resetCounters();
    this._snake.actionReset();
  }
  public onLeftButtonPressed() {
    this.movesList.push({
      move: "left",
      time: this.userInfo.timer,
    })
    this._snake.actionLeft();
  }
  public onUpButtonPressed() {
    this.movesList.push({
      move: "up",
      time: this.userInfo.timer,
    })
    this._snake.actionUp();
  }
  public onRightButtonPressed() {
    this.movesList.push({
      move: "right",
      time: this.userInfo.timer,
    })
    this._snake.actionRight();
  }
  public onDownButtonPressed() {
    this.movesList.push({
      move: "down",
      time: this.userInfo.timer,
    })
    this._snake.actionDown();
  }
  private resetCounters() {
    this.userInfo.score = 0;
    this.userInfo.timer = 0;
  }

  public onClickLogOut() {
    this._storage.resetUser();
    this.router.navigate(["logForm"]);

  }
  public gameOver() {
    this.movesList.push({
      move: "game ended",
      time: this.userInfo.timer,
    })
    clearInterval(this.timerInterval);
    this.userInfo.gameStatus = "end";
  }
  public onClickDisplayMovesButton() {
    this.onStopButtonPressed();
    this.displayMovesChange();
  }

  public displayMovesChange() {
    this.displayMoves = !this.displayMoves;
  }
  public displayHighScoresChange() {
    this.displayHighScores = !this.displayHighScores;
  }

  public onClickHighScore() {
    // this.router.navigate(["highscores"]);
    this.displayHighScoresChange();
  }

}
