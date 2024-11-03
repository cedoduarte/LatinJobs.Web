import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
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
      next: response => {
        console.log(response);
      }, 
      error: error => {
        this.toastr.error(error, 'Error');
      }
    });
  }

  onSignupClick() {
    this.router.navigate(["auth/signup"]);
  }
}
