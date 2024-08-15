import { Component } from '@angular/core';
import { NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { StatCardComponent } from '../../components/common/stat-card/stat-card.component';
import { PageHeaderComponent } from '../../components/common/page-header/page-header.component';
import { map, mergeMap, of, switchMap, toArray } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { languageSelector } from '../../store/language/language.selectors';
import { Store } from '@ngrx/store';
import { LoanTypesChartComponent } from '../../charts/loan-types-chart/loan-types-chart.component';
import { MonthlyRecoveredChartComponent } from '../../charts/monthly-recovered-chart/monthly-recovered-chart.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PieChartModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgxChartsModule,
    StatCardComponent,
    PageHeaderComponent,
    TranslateModule,
    LoanTypesChartComponent,
    MonthlyRecoveredChartComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
