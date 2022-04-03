import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenVerifyService {

  constructor(private _http: HttpClient) { }
  checkToken(token:string) {
    const URL = 'http://scores.chrum.it/check-token';
    const headers = {
      "accept": "application/json",
      "Content-Type": "application/json",
    }
    const data = {
      "auth-token": token
    }
    return this._http.post(URL, data, {headers});
  }
}
