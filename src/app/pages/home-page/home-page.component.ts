import { Component } from '@angular/core';
import { MonthlyStatsGraphComponent } from '../../loans/monthly-stats-graph/monthly-stats-graph.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MonthlyStatsGraphComponent,
    PieChartModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  monthlyStats = [
    {
      name: 'January',
      value: 150,
    },
    {
      name: 'February',
      value: 180,
    },
    {
      name: 'March',
      value: 200,
    },
    {
      name: 'April',
      value: 170,
    },
    {
      name: 'May',
      value: 190,
    },
    {
      name: 'June',
      value: 160,
    },
    {
      name: 'July',
      value: 190,
    },
    {
      name: 'August',
      value: 0,
    },
    {
      name: 'September',
      value: 0,
    },
    {
      name: 'October',
      value: 0,
    },
    {
      name: 'November',
      value: 0,
    },
    {
      name: 'November',
      value: 0,
    },
  ];

  loanTypes = [
    {
      name: 'Business',
      value: 4063203,
      extra: {
        code: 'de',
      },
    },
    {
      name: 'Personal',
      value: 5070000,
      extra: {
        code: 'us',
      },
    },
    {
      name: 'Education',
      value: 36011745,
      extra: {
        code: 'fr',
      },
    },
  ];
}
