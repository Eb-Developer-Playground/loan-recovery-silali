import { Component, Input } from '@angular/core';
import { Borrower } from '../../../models/loans/Borrower';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-selected-borrower-display',
  standalone: true,
  imports: [NgIf],
  templateUrl: './selected-borrower-display.component.html',
  styleUrl: './selected-borrower-display.component.scss',
})
export class SelectedBorrowerDisplayComponent {
  @Input() borrower: Borrower | null | undefined = null;
}
