import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticateDto } from '../../../shared/types';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnDestroy {
  authenticationForm: FormGroup;
  destroy$ = new Subject<void>();

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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (!this.authenticationForm.get('email')?.valid) {
      this.toastr.error('The email is not valid', 'Error');
      return;
    }
    if (!this.authenticationForm.get('password')?.valid) {
      this.toastr.error('The password is not valid', 'Error');
      return;
    }

    const authenticateDto: AuthenticateDto = {
      email: this.authenticationForm.get('email')?.value,
      password: this.authenticationForm.get('password')?.value
    };
    
    this.authService.authenticate(authenticateDto)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
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