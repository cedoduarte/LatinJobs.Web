import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  authenticationForm: FormGroup;

  constructor(private readonly router: Router) {
    this.authenticationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    console.log("submit...");
  }

  onSignupClick() {
    this.router.navigate(["auth/signup"]);
  }
}
