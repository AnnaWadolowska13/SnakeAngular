import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


export interface User{
  name: string,
  email: string
}
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent{
  constructor() {}
  @Output() public user = new EventEmitter<User>();
  public onClickLogIn(form: FormGroup): void{
    const logInUser:User = {
      name: form.value.userName,
      email: form.value.userEmail
    }
    this.user.emit(logInUser);
    // this.storage.setUser(user);
    // this.router.navigate(["game"]);
  }

}
