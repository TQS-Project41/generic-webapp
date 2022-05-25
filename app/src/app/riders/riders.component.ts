import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  status: string;
  localization: string;
}

const COUNTRIES: Country[] = [
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

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {

  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {

  }

}
