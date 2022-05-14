import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Move } from '../game/game.component';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  public selectedType: string = "all";
  public sortType: string = "old";
  public movesList: Array<Move> = [];
  public movesTypes: Array<string> = ['right', 'left', 'up', 'down', 'score', 'game ended', 'game paused', 'game started'];
  constructor(private _storage: StorageService,private _location: Location) {
    this.movesList = _storage.readMovesList();
  }

  ngOnInit(): void {
  }
  public goBackToGame() {
    this._location.back();
  }
}
