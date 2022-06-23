import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/classes/Delivery';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  deliveries: Delivery[] = []

  constructor(private service: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    const url_array = this.router.url.split("/");
    let rider_id = +url_array[url_array.length - 1];

    if (rider_id != NaN) {
      console.log("NO ID")
      this. getDeliveriesByRiderID(rider_id);
      
    } else {
      console.log("ID")
      this.getDeliveries();
    }

  }

  getDeliveries() {
    this.service.getDeliveries().subscribe((info: any) => {
      this.deliveries = info.content;
      console.log(info);
    });
  }

  getDeliveriesByRiderID(id: number) {
    this.service.getDeliveries().subscribe((info: any) => {
      this.deliveries = info.content;
      console.log(info);
    });
  }

}
