import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {
  private register_url = 'http://localhost:3000/api/register';
  private login_url = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient, private router: Router) {}
  registerUser(user) {
    return this.http.post(this.register_url, user);
  }
  loginUser(user) {
    return this.http.post(this.login_url, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }
}
