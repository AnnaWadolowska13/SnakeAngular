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
import { SortPipe } from './sort.pipe';
import { HighscoresComponent } from './highscores/highscores.component';
import { MyScoresPipe } from './my-scores.pipe';
import { MovesComponent } from './moves/moves.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    GameComponent,
    FilterPipe,
    IntroComponent,
    GameInfoComponent,
    ControllerComponent,
    SortPipe,
    HighscoresComponent,
    MyScoresPipe,
    MovesComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "Intro", component: IntroComponent },
      { path: "game/:color", component: GameComponent },
      { path: "game", component: GameComponent },
      { path: "highscores", component: HighscoresComponent },
      { path: "moves", component: MovesComponent },
      { path: "**", redirectTo: "Intro" },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
