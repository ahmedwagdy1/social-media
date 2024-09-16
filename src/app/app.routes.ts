import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { SignInComponent } from './layout/register/sign-in/sign-in.component';
import { SignUpComponent } from './layout/register/sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { loggedUserGuard } from './shared/guard/loggedUser/logged-user.guard';
import { unLoggedUserGuard } from './shared/guard/unLoggedUser/un-logged-user.guard';
import { MyProfileComponent } from './layout/pages/my-profile/my-profile.component';
import { ResetPasswordComponent } from './layout/register/reset-password/reset-password.component';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch: "full"},
    {path: 'signup', component: SignUpComponent, canActivate:[unLoggedUserGuard]},
    {path: 'signin', component: SignInComponent, canActivate:[unLoggedUserGuard]},
    {path: 'home', component: HomeComponent, canActivate : [loggedUserGuard]},
    {path: 'myProfile', component: MyProfileComponent, canActivate : [loggedUserGuard]},
    {path: 'changepassword', component: ResetPasswordComponent},
    {path: '**', component: NotFoundComponent},

];
