import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  private przekieruj: String;
  login = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }


  ReDirect(przekieruj) {
    this.router.navigate([przekieruj]);
  }

  onSubmit() {
    this.authService.login(this.login, this.password).then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  private onSubmitSuccess() {
    this.router.navigate(['user']);
  }


  private onSubmitFailure() {
    console.log('Login or password is incorrect, please try again !');
  }

}
