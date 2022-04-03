
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface HighScore{
  name: string,
  score: number

}

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {
  constructor(private _http: HttpClient) {}

  load() {
    const URL = 'http://scores.chrum.it/snake';
    return this._http.get(URL, {
      headers: {
        accept: 'application/json',
      },
    });
  }
  addNewScore( name: string, score:number) {
    const URL = "http://scores.chrum.it/scores";
    const data = {
      "name": name,
      "game": "snake",
      "score": score
    }
    const headers = {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
    return this._http.post(URL, data, {headers} )
  }
}