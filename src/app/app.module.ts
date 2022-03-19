import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameInfoComponent } from './game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    GameComponent,
    FilterPipe,
    IntroComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "Intro", component: IntroComponent },
      { path: "game", component: GameComponent },
      { path: "**", redirectTo: "Intro" },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
