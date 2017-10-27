import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  private przekieruj: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

}
