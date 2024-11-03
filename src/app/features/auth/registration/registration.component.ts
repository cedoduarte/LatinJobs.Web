import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CreateUserDto } from '../../../shared/types';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnDestroy {
  registrationForm: FormGroup;
  destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly toastr: ToastrService
  ) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private validateForm(): boolean {
    if (!this.registrationForm.get('firstName')?.valid) {
      this.toastr.error('The first name is required', 'Error');
      return false;
    }
    if (!this.registrationForm.get('lastName')?.valid) {
      this.toastr.error('The last name is required', 'Error');
      return false;
    }
    if (!this.registrationForm.get('email')?.valid) {
      this.toastr.error('The email is not valid', 'Error');
      return false;
    }
    if (!this.registrationForm.get('password')?.valid) {
      this.toastr.error('The password is not valid', 'Error');
      return false;
    }
    if (!this.registrationForm.get('confirmPassword')?.valid) {
      this.toastr.error('The confirmation password is not valid', 'Error');
      return false;
    }
    return true;
  }

  private getCreateUserDto(): CreateUserDto {
    const createUserDto: CreateUserDto = {
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
      passwordConfirmation: this.registrationForm.get('confirmPassword')?.value,
      firstName: this.registrationForm.get('firstName')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      roleId: -1
    };
    return createUserDto;
  }

  private registerUser(createUserDto: CreateUserDto) {
    this.authService.registerUser(createUserDto)
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

  onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    const createUserDto: CreateUserDto = this.getCreateUserDto();
    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      this.toastr.error('Please, confirm your password', 'Error');
      return;
    }
    this.registerUser(createUserDto);
  }

  onGoBackToLoginClick() {
    this.router.navigate(["auth/signin"]);
  }
}
