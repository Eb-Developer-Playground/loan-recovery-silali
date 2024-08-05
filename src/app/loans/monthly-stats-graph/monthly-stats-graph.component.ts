import { Component, Input } from '@angular/core';
import { BarChartModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-monthly-stats-graph',
  standalone: true,
  imports: [BarChartModule],
  templateUrl: './monthly-stats-graph.component.html',
  styleUrl: './monthly-stats-graph.component.scss',
})
export class MonthlyStatsGraphComponent {
  @Input() data: any[] = [];
}
