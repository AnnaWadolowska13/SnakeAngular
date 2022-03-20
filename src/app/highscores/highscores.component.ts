import { Component, OnInit } from '@angular/core';
import { HighscoresService } from '../highscores.service';

export interface HighScore{

}

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  public highscores: any = [];

  constructor(private _highscores: HighscoresService) {
    this._highscores.load().subscribe((result) => {
      this.highscores = result;
      console.log(this.highscores)
    })
   }

  ngOnInit(): void {
  }

}
