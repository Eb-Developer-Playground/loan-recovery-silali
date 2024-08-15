import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSidebar } from '../../../store/sidebar/sidebar.actions';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input({ required: true }) title: string = '';

  constructor(private store: Store) {}

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }
}
