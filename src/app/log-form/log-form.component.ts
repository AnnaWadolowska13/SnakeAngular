import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';


export interface User{
  name: string,
  email: string
}
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  constructor(private storage: StorageService, private router:Router) {}

  ngOnInit(): void {
  }
  public onClickLogIn(form: FormGroup): void{
    const user:User = {
      name: form.value.userName,
      email: form.value.userEmail
    }
    this.storage.setUser(user);
    this.router.navigate(["game"])
  }

}
