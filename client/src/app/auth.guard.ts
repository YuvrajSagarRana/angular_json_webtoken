import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authservice: AuthServiceService
  ) {}
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    } else { this.router.navigate(['/login']); }
  }
}
