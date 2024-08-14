import { Component, Input } from '@angular/core';
import { FlagUK } from '../flags/uk.flag';
import { NgIf } from '@angular/common';
import { FlagFR } from '../flags/fr.flag';

@Component({
  selector: 'current-language-indicator',
  template: `
    <flag-uk *ngIf="language == 'en'" [size]="42" />
    <flag-fr *ngIf="language == 'fr'" [size]="42" />
  `,
  standalone: true,
  imports: [FlagUK, NgIf, FlagFR],
})
export class CurrentLanguageIndicator {
  @Input({ required: true }) language: string | null = 'en';
}
