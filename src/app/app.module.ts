import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ForumsComponent } from './Components/forums/forums.component';
import { VoteComponent } from './Components/vote/vote.component';
import { StoreComponent } from './Components/store/store.component';
import { PlayComponent } from './Components/play/play.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HighscoresComponent } from './Components/highscores/highscores.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForumsComponent,
    VoteComponent,
    StoreComponent,
    PlayComponent,
    NavigationComponent,
    HighscoresComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
