import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CarService } from './services/car.service';

import { AppComponent } from './app.component';

import { carReducer } from './reducers/car.reducer';

import { CarEffect } from './effects/car.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      carState: carReducer
    }),
    EffectsModule.forRoot([
      CarEffect
    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
