import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './Project-Components/reusable/topnav/topnav.component';
import { FooterComponent } from './Project-Components/reusable/footer/footer.component';
import { AchievementsComponent } from './Project-Components/achievements/achievements.component';
import { AboutComponent } from './Project-Components/about/about.component';
import { NewsComponent } from './Project-Components/news/news.component';
import { ExpertsComponent } from './Project-Components/experts/experts.component';
import { WhoAboutComponent } from './Project-Components/about/who-about/who-about.component';
import { WhatAboutComponent } from './Project-Components/about/what-about/what-about.component';
import { ListComponent } from './Project-Components/reusable/list/list.component';
import { CarouselComponent } from './Project-components/reusable/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    FooterComponent,
    AchievementsComponent,
    AboutComponent,
    NewsComponent,
    ExpertsComponent,
    WhoAboutComponent,
    WhatAboutComponent,
    ListComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
