import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';
import { NgxSnakeModule } from 'ngx-snake';
import { IntroComponent } from './intro/intro.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { ControllerComponent } from './controller/controller.component';
import { HighscoresComponent } from './highscores/highscores.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    GameComponent,
    FilterPipe,
    IntroComponent,
    GameInfoComponent,
    ControllerComponent,
    HighscoresComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "Intro", component: IntroComponent },
      { path: "game", component: GameComponent },
      { path: "highscores", component: HighscoresComponent },
      { path: "**", redirectTo: "Intro" },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
