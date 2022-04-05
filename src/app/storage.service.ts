import { Injectable } from '@angular/core';
import { Move } from './game/game.component';
import { User } from './log-form/log-form.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user: User = {
    name: "",
    token: "" 
  };
  private movesList: Array<Move> = [];

  readUser() {
    return this.user;
  }
  setUser({name, token}: User) {
    this.user.name = name;
    this.user.token = token;
  }
  resetUser(){
    this.user.name = "";
    this.user.token = "";
  }
  isUserLogin() {
    if (this.user.name !== "") return true;
    return false
  }
  setMovesList(movesList: Array<Move>) {
    this.movesList = movesList;
  }
  readMovesList() {
    return this.movesList;
  }
}
