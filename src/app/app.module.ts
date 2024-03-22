import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiatComponent } from './car-components/fiat/fiat.component';
import { AudiComponent } from './car-components/audi/audi.component';
import { FordComponent } from './car-components/ford/ford.component';
import { HomeComponent } from './car-components/home/home.component';
import { FooterComponent } from './components-1/footer/footer.component';
import { NavbarComponent } from './components-1/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FiatComponent,
    AudiComponent,
    FordComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
