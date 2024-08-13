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
import { Store } from '@ngrx/store';
import { selectSidebarIsOpen } from '../../store/sidebar/sidebar.selectors';
import { AsyncPipe } from '@angular/common';
import { FlagUK } from '../../components/common/flags/uk.flag';
import { FlagFR } from '../../components/common/flags/fr.flag';
import { LanguageSelectorComponent } from '../../components/common/language-selector/language-selector.component';

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
    AsyncPipe,
    FlagUK,
    FlagFR,
    LanguageSelectorComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  selectedSidebarState = this.store.select(selectSidebarIsOpen);

  constructor(private store: Store) {}
}
