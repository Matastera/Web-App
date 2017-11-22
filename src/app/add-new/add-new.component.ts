import { Component, OnInit } from '@angular/core';
import { Car } from '../main-page/models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.less']
})
export class AddNewComponent implements OnInit {

  // Przykładowa baza marek samochodów
  marki: string[] = [
    'Fiat',
    'Opel',
    'BMW',
    'Pasat Somsiada'
  ];

  typyPaliwa: string[] = [
    'Benzyna',
     'Olej napędowy',
     'LPG',
     'Biopaliwo'
  ];

  dataModel: Car = {
    id: 0,
    cena: 0,
    client: {
      firstName: '',
      surname: ''
    },
    marka: '',
    moc: 0,
    model: '',
    paliwo: '',
    przebieg: 0,
    rokProdukcji: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    // this fubction will validate data
    // and send data to server
    // and redirect to page with user`s advertisments,temporary it redirects to user page
    this.router.navigate(['user']);
    }
  }
