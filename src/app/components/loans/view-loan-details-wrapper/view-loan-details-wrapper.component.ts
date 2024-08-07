import { Component } from '@angular/core';
import { DrawerComponent } from '../../common/drawer/drawer.component';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { LoanService } from '../../../services/loans/loan.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectRoute } from '../../../store/router/router.selectors';

@Component({
  selector: 'app-view-loan-details-wrapper',
  standalone: true,
  imports: [DrawerComponent, LoanDetailsComponent],
  templateUrl: './view-loan-details-wrapper.component.html',
  styleUrl: './view-loan-details-wrapper.component.scss',
})
export class ViewLoanDetailsWrapperComponent {
  constructor(private route: ActivatedRoute) {
    this.route.snapshot.params['id'];
  }
}
