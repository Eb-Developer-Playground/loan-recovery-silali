import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../components/common/logo/logo.component';
import { MatIcon } from '@angular/material/icon';
import { MainMenuComponent } from '../../components/common/main-menu/main-menu.component';
import { MainMenuItem } from '../../models/ui/MainMenuItem';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatChipAvatar } from '@angular/material/chips';
import { MatCardAvatar } from '@angular/material/card';
import { SidebarComponent } from '../../components/common/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
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
    SidebarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
