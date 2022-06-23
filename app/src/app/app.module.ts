import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RidersPageComponent } from './pages/riders-page/riders-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPService } from './services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RidersPageComponent,
    StatisticsPageComponent,
    LoginComponent,
    RegisterComponent,
    DeliveriesComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
