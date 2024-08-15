import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { MainMenuItem } from '../../../models/ui/MainMenuItem';
import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';
import { toggleSidebar } from '../../../store/sidebar/sidebar.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogoComponent, MainMenuComponent, UserProfileButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: MainMenuItem[] = [
    {
      icon: 'home',
      label: 'DASHBOARD',
      path: '/',
      shouldMatchExact: true,
    },
    {
      icon: 'money',
      label: 'LOANS',
      path: 'loans',
      shouldMatchExact: false,
    },
  ];

  constructor(private store: Store) {}

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }
}
