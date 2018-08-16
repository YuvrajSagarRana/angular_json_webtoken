import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(
    private _authService: AuthServiceService,
    private _router: Router
  ) {}

  ngOnInit() {}
  registerUser() {
    // console.log(this.registerUserData);
    this._authService.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }
}
