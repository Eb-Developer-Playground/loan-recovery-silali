import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatMiniFabButton, MatIcon, MatButton],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() open: boolean = false;
  @Input() title: string = '';

  @Output() closeDrawer = new EventEmitter();
}
