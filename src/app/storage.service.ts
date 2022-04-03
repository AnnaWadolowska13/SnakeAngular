import { Injectable } from '@angular/core';
import { User } from './log-form/log-form.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user: User = {
    name: "",
    token: "" 
  };

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
}
