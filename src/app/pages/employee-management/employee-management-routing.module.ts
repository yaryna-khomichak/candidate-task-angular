import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  { path: '', component: EmployeeManagementComponent },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('../employee-edit/employee-edit.module').then(
        (m) => m.EmployeeEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {}
