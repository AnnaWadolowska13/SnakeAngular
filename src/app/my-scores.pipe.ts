import { Pipe, PipeTransform } from '@angular/core';
import { HighScore } from './highscores.service';

@Pipe({
  name: 'myScores'
})
export class MyScoresPipe implements PipeTransform {

  transform(highscores: Array<HighScore>, name:string): Array<HighScore> {
    let result = highscores.filter((score) => score.name === name);
    console.log(result)
    return result;
  }

}
