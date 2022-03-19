import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '../game/game.component';


@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent{

  constructor() { }
  @Input() info: UserInfo = {
    user: {
      name: "",
      email: ""
    },
    gameStatus: "",
    score: 0,
    timer: 0,
  }

}
