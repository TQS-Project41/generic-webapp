import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersComponent } from './riders/riders.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'riders', component: RidersComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
