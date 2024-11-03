import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationComponent } from './authentication.component';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [
        ReactiveFormsModule, 
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with email and password controls', () => {
    expect(component.authenticationForm.contains('email')).toBeTruthy();
    expect(component.authenticationForm.contains('password')).toBeTruthy();
  });

  it('should require email to be a valid email format', () => {
    const emailControl = component.authenticationForm.get('email');
    emailControl?.setValue('invalidemail');
    expect(emailControl?.valid).toBeFalsy();

    emailControl?.setValue('valid@email.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should require password to have a minimum length of 8 characters', () => {
    const passwordControl = component.authenticationForm.get('password');
    passwordControl?.setValue('short');
    expect(passwordControl?.valid).toBeFalsy();

    passwordControl?.setValue('longenoughpassword');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it ('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it ('should navigate to signup page on onSignupClick', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onSignupClick();
    expect(navigateSpy).toHaveBeenCalledWith(['auth/signup']);
  });
});
