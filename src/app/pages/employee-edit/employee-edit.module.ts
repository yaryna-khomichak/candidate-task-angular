import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';

import { EmployeeEditFormComponent } from './components';

import { EmployeeEditRoutingModule } from './employee-edit-routing.module';
import { EmployeeEditComponent } from './employee-edit.component';

@NgModule({
  declarations: [EmployeeEditComponent, EmployeeEditFormComponent],
  imports: [
    CommonModule,
    EmployeeEditRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class EmployeeEditModule {}
