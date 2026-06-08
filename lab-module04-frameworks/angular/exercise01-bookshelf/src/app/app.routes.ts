import { Routes } from '@angular/router';
import { Home } from './features/public/home/home';
import { Login } from './features/public/login/login';
import { About } from './features/public/about/about';
import { Dashboard } from './features/private/dashboard/dashboard';
import { Gallery } from './features/private/gallery/gallery';
import { Crud } from './features/private/crud/crud';
import { Profile } from './features/private/profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'about', component: About },
  { path: 'dashboard', component: Dashboard },
  { path: 'gallery', component: Gallery },
  { path: 'crud', component: Crud },
  { path: 'profile', component: Profile },
];
