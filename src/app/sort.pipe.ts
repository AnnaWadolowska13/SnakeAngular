import { Pipe, PipeTransform } from '@angular/core';
import { HighScore } from './highscores.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(highscores: Array<HighScore>): Array<HighScore> {
    return highscores.sort((a, b) => b.score - a.score)
  }

}
