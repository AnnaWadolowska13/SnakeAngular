import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TokenVerifyService } from '../token-verify.service';


export interface User{
  name: string,
  token: string
}
interface Result{
  success: boolean
}
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent{
  public badTokenError = false;
  constructor(private _tokenVerify: TokenVerifyService) {
  }
  @Output() public user = new EventEmitter<User>();
  public onClickLogIn(form: FormGroup): void{
    this._tokenVerify.checkToken(form.value.gameToken).subscribe((result:any) => {
      if (result.success) {
        console.log(result)
        const logInUser:User = {
        name: form.value.userName,
        token: form.value.gameToken
        }
        this.badTokenError = false;
        this.user.emit(logInUser);        
      } else {
        this.badTokenError = true;
        setTimeout(() => {
          this.badTokenError = false;
        }, 3000)
      }
    })
  }

}
