import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersComponent } from './riders/riders.component';

const routes: Routes = [
  { path: 'riders', component: RidersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
