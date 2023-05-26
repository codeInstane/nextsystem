import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export interface NavigationTab {
  name: string;
  link: string;
  permission: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  tabs: NavigationTab[] = [
    { name: 'Home', link: '/', permission: ' ' },
    { name: 'Dashboard', link: '/dashboard', permission: 'view_dashboard' },
    { name: 'Profile', link: '/profile', permission: 'view_profile' },
    { name: 'Settings', link: '/settings', permission: 'view_settings' },
    { name: 'Admin', link: '/admin', permission: 'view_admin' }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  get authorizedTabs(): NavigationTab[] {
    return this.tabs.filter(tab => {
      if (!tab.permission) {
        return true;
      }
      return this.authService.userPermissions.includes(tab.permission);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
