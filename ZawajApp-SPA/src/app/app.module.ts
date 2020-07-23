import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './Components/Zawaj/weather/weather.component';
import { IndividualsComponent } from './Components/UnitedNation/Individuals/Individuals.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    IndividualsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
