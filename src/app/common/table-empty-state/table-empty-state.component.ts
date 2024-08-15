import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-empty-state',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './table-empty-state.component.html',
  styleUrl: './table-empty-state.component.scss',
})
export class TableEmptyStateComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) message: string = 'No records found.';
}
