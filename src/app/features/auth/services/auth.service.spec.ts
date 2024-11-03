import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthenticatedDto, AuthenticateDto } from '../../../shared/types';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService, HttpClient]
    });

    authService = TestBed.inject(AuthService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  });

  it('should authenticate user and return AuthenticatedDto', () => {
    const mockAuthenticateDto: AuthenticateDto = {
      email: 'testEmail',
      password: 'testPassword'
    };
    const mockAuthenticatedDto: AuthenticatedDto = {
      token: 'some-token',
      authentication: {
        userId: 1,
        date: '2024-11-01'
      }
    };

    httpClientSpy.post.and.returnValue(of(mockAuthenticatedDto));

    authService.authenticate(mockAuthenticateDto).subscribe({
      next: (response: any) => {
        expect(response).toEqual(mockAuthenticatedDto);
      },
      error: (error: any) => { }
    });
  });

  it('should handle error when authentication fails', () => {
    const mockAuthenticateDto: AuthenticateDto = {
      email: 'testEmail',
      password: 'testPassword'
    };
    const mockError: HttpErrorResponse = new HttpErrorResponse({
      error: 'Invalid credentials',
      status: 401
    });

    httpClientSpy.post.and.returnValue(throwError(() => mockError));

    authService.authenticate(mockAuthenticateDto).subscribe({
      next: () => fail('Expected an error'),
      error: (error: any) => {
        expect(error).toEqual(mockError);
      }
    });
  });
});