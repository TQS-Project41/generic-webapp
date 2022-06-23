import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersPageComponent } from './pages/riders-page/riders-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';

const routes: Routes = [
  
  { path: '', component: StatisticsPageComponent },

  { path: 'deliveries', component: DeliveriesComponent },

  { 
    path: 'riders', children: [
      { path: '', component: RidersPageComponent },
      { path: ':id', component: DeliveriesComponent }
    ]
  },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
