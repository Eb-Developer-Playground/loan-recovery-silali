import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStatsGraphComponent } from './monthly-stats-graph.component';

describe('MonthlyStatsGraphComponent', () => {
  let component: MonthlyStatsGraphComponent;
  let fixture: ComponentFixture<MonthlyStatsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyStatsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyStatsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
