import { Pipe, PipeTransform } from '@angular/core';
import { Move } from './game/game.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(moves: Array<Move>, type:string, sort:string, length:number): Array<Move> {
    const filteredList:Array<Move> = [];
    moves.forEach((move: Move) => {
      if (type == 'all' || move.move.includes(type)) {
        filteredList.push(move)
      }
    })
    if (sort === 'old'){
      filteredList.sort((a, b) => a.time - (b.time));
    } else {
      filteredList.sort((a, b) => b.time - (a.time));
    }
    
    return filteredList;
  }

}