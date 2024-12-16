import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  // { path: 'detail/:id', component: '' },
  // { path: 'edit/:id', component: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
