import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserSettings } from '../log-form/log-form.component';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private storage: StorageService, private router:Router) {}

  ngOnInit(): void {
  }

  public onLogIn(user: UserSettings):void {
    let userLogIn:User = {
      name: user.name,
      token: user.token
    }
    this.storage.setUser(userLogIn);
    this.router.navigate(["game", user.color]);
  }

}
