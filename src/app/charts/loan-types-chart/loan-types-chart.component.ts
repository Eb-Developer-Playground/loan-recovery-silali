import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, of, switchMap, toArray } from 'rxjs';
import { languageSelector } from '../../store/language/language.selectors';

@Component({
  selector: 'app-loan-types-chart',
  standalone: true,
  imports: [MatCard, MatCardContent, NgxChartsModule],
  templateUrl: './loan-types-chart.component.html',
})
export class LoanTypesChartComponent {
  selectedLanguage$ = this.store.select(languageSelector);

  loanTypes: any[] = [];

  constructor(
    private translateService: TranslateService,
    private store: Store,
  ) {
    this.handleTranslations();
  }

  handleTranslations() {
    this.selectedLanguage$
      .pipe(switchMap((language) => this.translateMonths()))
      .subscribe((translatedData) => {
        this.loanTypes = translatedData;
      });
  }

  translateMonths() {
    return of([
      {
        name: 'BUSINESS',
        value: 4063203,
        extra: {
          code: 'de',
        },
      },
      {
        name: 'PERSONAL',
        value: 5070000,
        extra: {
          code: 'us',
        },
      },
      {
        name: 'EDUCATION',
        value: 36011745,
        extra: {
          code: 'fr',
        },
      },
    ]).pipe(
      mergeMap((months) =>
        of(...months).pipe(
          mergeMap((month) =>
            this.translateService.get(month.name).pipe(
              map((translatedName) => ({
                name: translatedName,
                value: month.value,
              })),
            ),
          ),
          toArray(),
        ),
      ),
    );
  }
}
