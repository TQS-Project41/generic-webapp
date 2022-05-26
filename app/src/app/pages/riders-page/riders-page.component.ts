import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riders-page',
  templateUrl: './riders-page.component.html',
  styleUrls: ['./riders-page.component.css']
})
export class RidersPageComponent implements OnInit {

  couriers = [
    {
      name: 'Alexandre Marques',
      status: "Busy",
      localization: "Mação, Rua da Escola"
    },
    {
      name: 'Pedro Matos',
      status: "Free",
      localization: "Porto , Avenida 123"
    },
    {
      name: 'Gonçalo Fragoso',
      status: "Busy",
      localization: "Ovar, Rua da Estia"
    },
    {
      name: 'João Carlos',
      status: "Free",
      localization: "Aveiro, Rua da UA"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
