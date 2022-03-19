import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgxSnakeComponent } from 'ngx-snake';
import { User } from '../log-form/log-form.component';
import { StorageService } from '../storage.service';

export interface Move{
  move: string,
  time: number,
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild(NgxSnakeComponent) public _snake!: NgxSnakeComponent;
  public user;
  public score: number = 0;
  public timer: number = 0;
  public timerInterval!: any;
  public gameStatus: string = 'ready';
  public movesList: Array<Move> = [];
  public movesTypes: Array<string> = ['right', 'left', 'up', 'down', 'score', 'game ended', 'game paused', 'game started'];
  public selectedType: string = "all";
  public sortType: string = "old";
  public displayMoves: boolean = false;

  constructor(private storage: StorageService, private router:Router) {
    this.user = this.storage.readUser();
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

  public foodEaten() {
    this.score++;
    this.movesList.push({
      move: "score: "+ this.score,
      time: this.timer,
    })
    // console.log(this.score)
  }
  public onStartButtonPressed() {
    if (this.gameStatus !== "paused") {
      this.onResetButtonPressed();
    }
    this.gameStatus = "started";
    this.timerInterval = setInterval(() => {
      this.timer++;
    }, 1000);
    this.movesList.push({
      move: "game started",
      time: this.timer,
    })
    this._snake.actionStart();
  }
  public onStopButtonPressed() {
    if (this.gameStatus === "started") {
      clearInterval(this.timerInterval);
      this.gameStatus = "paused";
      this._snake.actionStop();
      this.movesList.push({
        move: "game paused",
        time: this.timer,
      })
    }

  }
  public onResetButtonPressed() {
    clearInterval(this.timerInterval);
    this.movesList = [];
    this.gameStatus = "ready";
    this.resetCounters();
    this._snake.actionReset();
  }
  public onLeftButtonPressed() {
    this.movesList.push({
      move: "left",
      time: this.timer,
    })
    this._snake.actionLeft();
  }
  public onUpButtonPressed() {
    this.movesList.push({
      move: "up",
      time: this.timer,
    })
    this._snake.actionUp();
  }
  public onRightButtonPressed() {
    this.movesList.push({
      move: "right",
      time: this.timer,
    })
    this._snake.actionRight();
  }
  public onDownButtonPressed() {
    this.movesList.push({
      move: "down",
      time: this.timer,
    })
    this._snake.actionDown();
  }
  private resetCounters() {
    this.score = 0;
    this.timer = 0;
  }

  public onClickLogOut() {
    this.storage.resetUser();
    this.router.navigate(["logForm"]);

  }
  public gameOver() {
    this.movesList.push({
      move: "game ended",
      time: this.timer,
    })
    clearInterval(this.timerInterval);
    this.gameStatus = "end";
  }
  public onClickDisplayMoves() {
    this.displayMoves = !this.displayMoves;
  }
}
