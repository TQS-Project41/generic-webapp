import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Rider } from 'src/app/classes/Rider';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-riders-page',
  templateUrl: './riders-page.component.html',
  styleUrls: ['./riders-page.component.css']
})
export class RidersPageComponent implements OnInit {

  couriers: Rider[] = [];

  active_couriers: Rider[] = [];
  applied_couriers: Rider[] = [];

  constructor(private service : RidersService) { }

  ngOnInit(): void {
    this.getAllRiders();
    this.getActive();
    this.getApplied();
  }

  getAllRiders() {
    this.service.getRiders().subscribe((info) => {
      this.couriers = info;
    });
  }

  accept(id: number) {
    this.service.accept(id).subscribe((info) => {
      console.log("ACCEPT", info)
    });
  }

  refuse(id: number) {
    this.service.block(id).subscribe((info) => {
      console.log("BLOCK", info)
    });
  }

  getActive() {
    this.service.active().subscribe((info) => {
      console.log("ACTIVE", info)
    });
  }

  getApplied() {
    this.service.applied().subscribe((info) => {
      console.log("APPLIED", info)
    });
  }

}
