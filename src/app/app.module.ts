import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EmployeeEffects,
  employeeFilterReducer,
  employeeReducer,
} from './store';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      employee: employeeReducer,
      filter: employeeFilterReducer,
    }),
    EffectsModule.forRoot([EmployeeEffects]),
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
