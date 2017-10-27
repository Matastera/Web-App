import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  private przekieruj: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }
}
