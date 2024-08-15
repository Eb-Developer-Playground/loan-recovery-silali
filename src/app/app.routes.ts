import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/auth/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoansPageComponent } from './pages/loans-page/loans-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ViewLoanDetailsWrapperComponent } from './components/loans/view-loan-details-wrapper/view-loan-details-wrapper.component';
import { CreateLoanPageComponent } from './components/pages/create-loan-page/create-loan-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ManageProfilePageComponent } from './user/manage-profile-page/manage-profile-page.component';

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
      { path: 'profile', component: ManageProfilePageComponent },
      { path: 'loans/u/create', component: CreateLoanPageComponent },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];
