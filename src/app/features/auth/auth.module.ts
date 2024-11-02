import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule } from '@angular/material/card'

const materialDesignModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule
];

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
