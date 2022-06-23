import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Delivery } from 'src/app/classes/Delivery';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataset[] = [
    { data: [100, 300, 200, 50, 50, 300, 200], label: 'Deliveries' },
  ];


  deliveries: Delivery[] = [];
  all_couriers: number = 0;

  constructor(private service : RidersService) { }

  ngOnInit(): void {
    this.getRidersInfo();
  }


  getRidersInfo() {
    this.service.getActiveRiders().subscribe((info) => {
      console.log(info)
      this.deliveries = info.content
    });

    this.service.getRiders().subscribe((info) => {
      this.all_couriers = info.length
    });
  }

}
