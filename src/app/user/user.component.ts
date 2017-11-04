import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
private przekieruj: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }
}
