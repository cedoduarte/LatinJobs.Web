import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { materialDesignModules } from 'src/app/shared/material-design/material-design-modules';

@NgModule({
  declarations: [
    AuthenticationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ...materialDesignModules
  ]
})
export class AuthModule { }
