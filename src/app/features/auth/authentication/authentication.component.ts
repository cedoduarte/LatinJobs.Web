import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  authenticationForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly toastr: ToastrService
  ) {
    this.authenticationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.authService.authenticate({
      email: this.authenticationForm.get('email')?.value,
      password: this.authenticationForm.get('password')?.value
    }).subscribe({
      next: (response: any) => {
        console.log(response);
      }, 
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error, 'Error');
      }
    });
  }

  onSignupClick() {
    this.router.navigate(["auth/signup"]);
  }
}