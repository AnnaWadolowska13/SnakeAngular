import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../log-form/log-form.component';
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

  public onLogIn(user: User):void {
    console.log(user);
    this.storage.setUser(user);
    this.router.navigate(["game"]);
  }

}
