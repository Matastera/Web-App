import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  private credentials = {
    login: 'user',
    password: 'user'
  };

  private isUserLoggedIn = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        resolve();
      } else {
        reject();
      }
    });
  }

  logOut() {
    this.isUserLoggedIn = false;
  }

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

}
