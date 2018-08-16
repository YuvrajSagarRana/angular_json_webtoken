import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(
    private _authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
  loginUser() {
    // console.log(this.loginUserData);
    this._authService.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
      console.log(res);
    });
  }
}
