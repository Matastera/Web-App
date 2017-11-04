import { Car } from '../models/car';
import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-car-table-row',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.less']
})
export class CarTableRowComponent implements OnInit {

  cars: Car[] = [{
    id: 1,
    marka: 'Mazda',
    model: 'Rx7',
    rokProdukcji: '2017',
    moc: 122,
    client: {
      firstName: 'Jan',
      surname: 'Kowalski'
    },
    cena: 300000,
    przebieg: 30000,
    paliwo: 'ropa'
  },
  {
    id: 2,
    model: 'Mercedes',
    marka: '124',
    rokProdukcji: '2017',
    moc: 150,
    client: {
      firstName: 'Michał',
      surname: 'Nowak'
    },
    cena: 1200,
    przebieg: 30000,
    paliwo: 'ropa'
  },
  {
    id: 3,
    model: 'Renault',
    marka: 'CLIO',
    rokProdukcji: '2017',
    moc: 122,
    client: {
      firstName: 'Beata',
      surname: 'Dampc'
    },
    cena: 2800,
    przebieg: 30000,
    paliwo: 'ropa'
  }];


  constructor() { }

  ngOnInit() {
  }

}
