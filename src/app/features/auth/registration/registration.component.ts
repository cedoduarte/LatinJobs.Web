import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private readonly router: Router) {
    this.registrationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    console.log("submit...");
  }

  onGoBackToLoginClick() {
    this.router.navigate(["auth/signin"]);
  }
}
