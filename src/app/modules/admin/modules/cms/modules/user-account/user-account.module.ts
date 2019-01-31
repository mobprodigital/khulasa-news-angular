import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ],
  declarations: [
    AddNewUserComponent,
    AllUsersComponent
  ]
})
export class UserAccountModule { }
