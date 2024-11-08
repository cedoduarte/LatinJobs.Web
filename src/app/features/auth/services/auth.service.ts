import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedDto, AuthenticateDto, CreateUserDto, UserViewModel } from '../../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS, HEADERS } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor(private readonly http: HttpClient) { }

  public authenticate(authenticateDto: AuthenticateDto): Observable<AuthenticatedDto> {
    return this.http.post<AuthenticatedDto>(
      ENDPOINTS.authenticate, 
      authenticateDto, 
      { headers: HEADERS }
    ).pipe(share());
  }

  public registerUser(createUserDto: CreateUserDto): Observable<UserViewModel> {
    return this.http.post<UserViewModel>(
      ENDPOINTS.createUser,
      createUserDto,
      { headers: HEADERS }
    ).pipe(share());    
  }
}
