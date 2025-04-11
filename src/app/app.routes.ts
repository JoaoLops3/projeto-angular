import { Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: '', component: HomeComponent }
];
