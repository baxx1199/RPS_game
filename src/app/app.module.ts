import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { RulesCardComponent } from './components/rules-card/rules-card.component';
import { ChoiceViewerComponent } from './components/choice-viewer/choice-viewer.component';
import { ResultViewerComponent } from './components/result-viewer/result-viewer.component';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    RulesCardComponent,
    ChoiceViewerComponent,
    ResultViewerComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
