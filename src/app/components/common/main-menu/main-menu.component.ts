import { Component, Input } from '@angular/core';
import { MainMenuItem } from '../../../models/ui/MainMenuItem';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  @Input() menu: MainMenuItem[] = [];
}
