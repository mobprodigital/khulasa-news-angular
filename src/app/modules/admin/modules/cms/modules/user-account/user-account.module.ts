import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from 'src/app/custom-valiators/must-match.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserAccountRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [
    MustMatchDirective,
    AddNewUserComponent,
    AllUsersComponent
  ]
})
export class UserAccountModule { }
