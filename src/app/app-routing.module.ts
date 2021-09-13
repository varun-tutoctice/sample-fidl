import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Project-Components/home/home.component';
import { AchievementsComponent } from './Project-Components/achievements/achievements.component';
import { AboutComponent } from './Project-Components/about/about.component';
import { NewsComponent } from './Project-Components/news/news.component';
import { ExpertsComponent } from './Project-Components/experts/experts.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "achievements", component: AchievementsComponent },
  { path: "news", component: NewsComponent },
  { path: "about", component: AboutComponent },
  { path: "experts", component: ExpertsComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
]
