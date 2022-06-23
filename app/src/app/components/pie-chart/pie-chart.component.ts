import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.css' ]
})
export class PieChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private service: DeliveryService) {}

  ngOnInit() {
    this.getInfo();
  }


  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'All Delivery Status',
        padding: {
            top: 10,
            bottom: 30
        }
      },
      legend: {
        display: false,
        position: 'bottom',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData!: ChartData<'pie', number[], string | string[]>;
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  getInfo() {
    this.service.getDeliveries().subscribe((info) => {
      console.log(info);

      let cancelled = 0; let queued = 0; let collecting = 0; let delivering = 0; let delivered = 0;

      // ir buscar os dados a info
      cancelled = 120; queued = 30; collecting = 50; delivering = 60; delivered = 190; // eliminar depois

      this.pieChartData = {
        labels: [ 'Cancelled' , 'Queued', 'Collecting', 'Delivering', 'Delivered'],
        datasets: [ {
          data: [ cancelled, queued, collecting, delivering, delivered ]
        } ]
      };
    })
  }

}