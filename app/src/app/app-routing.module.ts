import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersPageComponent } from './pages/riders-page/riders-page.component';

const routes: Routes = [
  { path: 'riders', component: RidersPageComponent },
  { path: 'statistics', component: StatisticsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
