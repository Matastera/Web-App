import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  private przekieruj: string;
    constructor(private router: Router) { }
    ngOnInit() {
    }
    ReDirect(przekieruj) {
      this.router.navigate([przekieruj]);
    }
  }
