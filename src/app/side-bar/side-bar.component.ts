import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  private przekieruj: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

}
