import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AuthenticateDto, AuthenticatedDto } from 'src/app/shared/types';
import { ENDPOINTS } from 'src/app/shared/constants';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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

    service.authenticate(mockAuthenticateDto).subscribe(response => {
      expect(response).toEqual(mockAuthenticatedDto);
    });

    const req = httpMock.expectOne(ENDPOINTS.authenticate);
    expect(req.request.method).toBe('POST');
    req.flush(mockAuthenticatedDto);
  });

  it('should handle error when authentication fails', () => {
    const mockAuthenticateDto: AuthenticateDto = {
      email: 'testEmail',
      password: 'testPassword'
    };

    service.authenticate(mockAuthenticateDto).subscribe(
      () => fail('Expected an error, not a response'),
      error => {
        expect(error.status).toBe(401);
      }
    );

    const req = httpMock.expectOne(ENDPOINTS.authenticate);
    expect(req.request.method).toBe('POST');
    req.flush('Authentication failed', { status: 401, statusText: 'Unauthorized' });
  });
});
