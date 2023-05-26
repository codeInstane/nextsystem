import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userPermissions: string[] = [];

  constructor(private router: Router) { }

  authenticate(email: any, password: any): void {
    // TODO: Implement authentication logic
    this._userPermissions = ['view_dashboard', 'view_profile', 'view_settings', 'view_admin'];
    this.router.navigate(['/']);
  }

  logout(): void {
    // TODO: Implement logout logic
    this._userPermissions = [];
  }

  get userPermissions(): string[] {
    return this._userPermissions;
  }




}
