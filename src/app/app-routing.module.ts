import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumsComponent } from './Components/forums/forums.component';
import { HighscoresComponent } from './Components/highscores/highscores.component';
import { HomeComponent } from './Components/home/home.component';
import { PlayComponent } from './Components/play/play.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { StoreComponent } from './Components/store/store.component';
import { VoteComponent } from './Components/vote/vote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Forums', component: ForumsComponent },
  { path: 'Play', component: PlayComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Vote', component: VoteComponent },
  { path: 'HiScores', component: HighscoresComponent },
  { path: 'Sign-In', component: SignInComponent },
  { path: 'Sign-Up', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
