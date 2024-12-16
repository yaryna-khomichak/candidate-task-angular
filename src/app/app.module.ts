import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EmployeeEffects,
  employeeFilterReducer,
  employeeReducer,
} from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      employee: employeeReducer,
      filter: employeeFilterReducer,
    }),
    EffectsModule.forRoot([EmployeeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
