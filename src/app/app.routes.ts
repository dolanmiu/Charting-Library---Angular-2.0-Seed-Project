import { Routes } from '@angular/router';

import { ChartComponent } from './chart_component/chart.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ChartComponent }
];

