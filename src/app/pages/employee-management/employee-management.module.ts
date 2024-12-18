import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import {
  EmployeeActionsComponent,
  EmployeeListComponent,
  EmployeeListItemComponent,
  EmployeeFilterComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from 'src/app/shared/components';

@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListItemComponent,
    EmployeeListComponent,
    EmployeeActionsComponent,
    EmployeeFilterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EmployeeManagementRoutingModule,
    EmployeeProfileComponent,
  ],
})
export class EmployeeManagementModule {}
