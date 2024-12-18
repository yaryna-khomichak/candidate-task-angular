import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-managment',
    pathMatch: 'full',
  },
  {
    path: 'employee-managment',
    loadChildren: () =>
      import('./pages/employee-management/employee-management.module').then(
        (m) => m.EmployeeManagementModule
      ),
  },
  {
    path: '**',
    redirectTo: 'employee-managment',
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
