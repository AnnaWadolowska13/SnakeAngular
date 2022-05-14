import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenVerifyService } from '../token-verify.service';


export interface User{
  name: string,
  token: string
}
export interface UserSettings{
  name: string,
  token: string,
  color:string
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
  public get name() { return this.logForm.get('name') };
  public get token() { return this.logForm.get('token') };
  public get color() { return this.logForm.get('color') };
  constructor(private _tokenVerify: TokenVerifyService, private _fb: FormBuilder) {
  }
  public logForm = this._fb.group({
    name: [null, [
      Validators.required,
      Validators.minLength(3)
    ]],
  token: [null, [Validators.required]],
  color: ["normal", [Validators.required]]
  });
  
  @Output() public user = new EventEmitter<UserSettings>();
  public onClickLogIn(): void{
    this._tokenVerify.checkToken(this.logForm.value.token).subscribe((result:any) => {
      if (result.success) {
        const logInUser:UserSettings = {
          name: this.logForm.value.name,
          token: this.logForm.value.token.toString(),
          color: this.logForm.value.color
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
