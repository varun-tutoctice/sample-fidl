import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './Project-Components/reusable/topnav/topnav.component';
import { FooterComponent } from './Project-Components/reusable/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
