import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'signin', 
    component: AuthenticationComponent 
  },
  {
    path: 'signup',
    component: RegistrationComponent
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
