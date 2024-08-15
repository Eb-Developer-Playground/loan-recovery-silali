import { Component } from '@angular/core';
import { FlagFR } from '../flags/fr.flag';
import { FlagUK } from '../flags/uk.flag';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { setLanguage } from '../../../store/language/language.actions';
import { languageSelector } from '../../../store/language/language.selectors';
import { CurrentLanguageIndicator } from './current-language-indicator.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    FlagFR,
    FlagUK,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    CurrentLanguageIndicator,
    AsyncPipe,
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  constructor(private store: Store) {}

  selectedLanguage = this.store.select(languageSelector);

  handleLanguageChange(language: string): void {
    this.store.dispatch(
      setLanguage({
        language,
      }),
    );
  }
}
