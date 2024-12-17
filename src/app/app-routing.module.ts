import { RouterModule, Routes } from '@angular/router';
import {
  EmployeeEditFormComponent,
  EmployeeProfileComponent,
} from './components';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: EmployeeProfileComponent },
  { path: 'edit/:id', component: EmployeeEditFormComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
