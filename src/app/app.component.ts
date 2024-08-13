import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { languageSelector } from './store/language/language.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'loan-recovery';

  selectedLanguage = this.store.select(languageSelector);

  constructor(
    private matIconRegistry: MatIconRegistry,
    public translate: TranslateService,
    private store: Store,
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    this.selectedLanguage.subscribe({
      next: (lang) => {
        translate.use(lang);
      },
    });
  }

  onOnInit() {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
