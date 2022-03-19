import { Injectable } from '@angular/core';
import { User } from './log-form/log-form.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user: User = {
    name: "",
    email: "" 
  };

  readUser() {
    return this.user;
  }
  setUser({name, email}: User) {
    this.user.name = name;
    this.user.email = email;
  }
  resetUser(){
    this.user.name = "";
    this.user.email = "";
  }
}
