import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/common/header/header.component';
import { SidebarComponent } from '../../components/common/sidebar/sidebar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../components/common/logo/logo.component';
import { MatIcon } from '@angular/material/icon';
import { MainMenuComponent } from '../../components/common/main-menu/main-menu.component';
import { MainMenuItem } from '../../models/ui/MainMenuItem';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatChipAvatar } from '@angular/material/chips';
import { MatCardAvatar } from '@angular/material/card';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    LogoComponent,
    MatIcon,
    RouterLink,
    RouterLinkActive,
    MainMenuComponent,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatButton,
    MatChipAvatar,
    MatCardAvatar,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  menuItems: MainMenuItem[] = [
    { icon: 'home', label: 'Dashboard', path: '/' },
    { icon: 'money', label: 'Loans', path: 'loans' },
  ];
}
