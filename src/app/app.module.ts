import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';
import { NgxSnakeModule } from 'ngx-snake';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    GameComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "logForm", component: LogFormComponent },
      { path: "game", component: GameComponent },
      { path: "**", redirectTo: "logForm" },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
