import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/auth/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ViewLoanDetailsWrapperComponent } from './components/loans/view-loan-details-wrapper/view-loan-details-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'loans',
        component: LoansPageComponent,
        pathMatch: 'prefix',
        children: [{ path: ':id', component: ViewLoanDetailsWrapperComponent }],
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];
