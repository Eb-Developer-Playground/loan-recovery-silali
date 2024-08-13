import { Component, Input } from '@angular/core';
import { MainMenuItem } from '../../../models/ui/MainMenuItem';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgForOf, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  @Input() menu: MainMenuItem[] = [];
}
