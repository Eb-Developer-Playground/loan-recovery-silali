import { Component } from '@angular/core';
import { CreateLoanFormComponent } from '../../components/loans/create-loan-form/create-loan-form.component';
import { PageHeaderComponent } from '../../components/common/page-header/page-header.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelect } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectedBorrowerDisplayComponent } from '../../components/loans/selected-borrower-display/selected-borrower-display.component';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import {
  selectIsUpdatingProfile,
  selectUser,
} from '../../store/auth/auth.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { updateUserProfile } from '../../store/auth/auth.actions';
import { UpdateUserProfileData } from '../../models/auth/UpdateUserProfileData';

@Component({
  selector: 'app-manage-profile-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatProgressSpinner,
    MatSelect,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    SelectedBorrowerDisplayComponent,
    TranslateModule,
  ],
  templateUrl: './manage-profile-page.component.html',
})
export class ManageProfilePageComponent {
  constructor(private store: Store) {}
  currentUser = toSignal(this.store.select(selectUser));
  isUpdatingProfile$ = this.store.select(selectIsUpdatingProfile);
  user = this.currentUser();
  updateProfileForm = new FormGroup({
    name: new FormControl(this.user?.name, Validators.required),
    email: new FormControl(this.user?.email, [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl(this.user?.phone),
  });

  handleFormSubmit() {
    if (this.updateProfileForm.valid) {
      this.store.dispatch(
        updateUserProfile(
          this.updateProfileForm.value as UpdateUserProfileData,
        ),
      );
    }
  }
}
