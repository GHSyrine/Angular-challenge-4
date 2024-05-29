import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {path : 'signup', component: SignupComponent},
  {path : 'userprofile', component: UserProfileComponent}
];
