import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { UserAuthenticationService } from '../../../services/user-authentication/user-authentication.service';
import { CreateUserAuthenticationDto, UserAuthenticationViewModel } from '../../../shared/types';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnDestroy {
  authenticationForm: FormGroup;
  destroy$ = new Subject<void>();

  public constructor(
    private readonly router: Router,
    private readonly userAuthenticationService: UserAuthenticationService,
    private readonly toastr: ToastrService,
    private readonly formBuilder: FormBuilder
  ) {
    this.authenticationForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private validateForm(): boolean {
    if (!this.authenticationForm.get('email')?.valid) {
      this.toastr.error('The email is not valid', 'Error');
      return false;
    }
    if (!this.authenticationForm.get('password')?.valid) {
      this.toastr.error('The password is not valid', 'Error');
      return false;
    }
    return true;
  }

  private getCreateUserAuthenticationDto(): CreateUserAuthenticationDto {
    const authenticateDto: CreateUserAuthenticationDto = {
      email: this.authenticationForm.get('email')?.value,
      password: this.authenticationForm.get('password')?.value
    };
    return authenticateDto;
  }

  private createUserAuthentication(createUserAuthenticationDto: CreateUserAuthenticationDto) {
    this.userAuthenticationService.create(createUserAuthenticationDto)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: UserAuthenticationViewModel) => {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(["/dashboard"]);
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.toastr.error(errorResponse.error, 'Error');
        }
      });
  }

  public onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    this.createUserAuthentication(this.getCreateUserAuthenticationDto());
  }

  public onSignupClick() {
    this.router.navigate(["auth/signup"]);
  }
}