/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { NewComponentComponent } from './features/NewComponent/NewComponent.component';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'newComponent', component: NewComponentComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: '**', component: NotFound404Component }
];
