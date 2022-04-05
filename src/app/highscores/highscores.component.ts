import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighScore, HighscoresService } from '../highscores.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  public highscores: Array<HighScore> = [];
  public userName: string = "";

  constructor(private _router: Router, private _highscores:HighscoresService, private _storage: StorageService,) { 
    this._highscores.load().subscribe((result: any) => {
      this.highscores = result;
      console.log(this.highscores)
    })
    this.userName = _storage.readUser().name;

  }

  ngOnInit(): void {
  }
  public goBackToGame() {
    this._router.navigate(['game'])
  }
}
