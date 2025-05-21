import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CreateUserDto, UserViewModel } from '../../../shared/types';
import { UserService } from '../../../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnDestroy {
  registrationForm: FormGroup;
  destroy$ = new Subject<void>();

  public constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly toastr: ToastrService,
    private readonly formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  public ngOnDestroy(): void {
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
    if (this.registrationForm.get('password')?.value !== this.registrationForm.get('confirmPassword')?.value) {
      this.toastr.error('The passwords do not match', 'Error');
      return false;
    }
    return true;
  }

  private getCreateUserDto(): CreateUserDto {
    const createUserDto: CreateUserDto = {
      password: this.registrationForm.get('password')?.value,
      passwordConfirmation: this.registrationForm.get('confirmPassword')?.value,
      firstName: this.registrationForm.get('firstName')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      email: this.registrationForm.get('email')?.value,
      roleId: 1 // todo... 1 significa admin, no debe crearse un admin por defecto
    };
    return createUserDto;
  }

  private createUser(createUserDto: CreateUserDto) {
    this.userService.create(createUserDto)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: UserViewModel) => {
          this.router.navigate(["auth/signin"]);
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
    this.createUser(this.getCreateUserDto());
  }

  public onGoBackToLoginClick() {
    this.router.navigate(["auth/signin"]);
  }
}
