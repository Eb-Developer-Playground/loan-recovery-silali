import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { MainMenuItem } from '../../../models/ui/MainMenuItem';
import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogoComponent, MainMenuComponent, UserProfileButtonComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuItems: MainMenuItem[] = [
    { icon: 'home', label: 'Dashboard', path: '/' },
    { icon: 'money', label: 'Loans', path: 'loans' },
  ];
}
