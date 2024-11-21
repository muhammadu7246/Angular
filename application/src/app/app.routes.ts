import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContectusComponent } from './contectus/contectus.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'app', component: AppComponent },
  { path: 'contectus', component:ContectusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];
