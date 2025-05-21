import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { CreateUserAuthenticationDto, UserAuthenticatedDto, UserAuthenticationViewModel } from '../../shared/types';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  constructor(private readonly http: HttpClient) { }

  public create(createAuthenticationDto: CreateUserAuthenticationDto): Observable<UserAuthenticationViewModel> {
    return this.http.post<UserAuthenticationViewModel>(ENDPOINTS.userAuthentication, createAuthenticationDto).pipe(share());
  }

  public findAllAsync(): Observable<UserAuthenticatedDto[]> {
    return this.http.get<UserAuthenticatedDto[]>(ENDPOINTS.userAuthentication).pipe(share());
  }

  public findByUserIdAsync(userId: number): Observable<UserAuthenticatedDto> {
    return this.http.get<UserAuthenticatedDto>(`${ENDPOINTS.userAuthentication}/${userId}`).pipe(share());
  }

  public removeAsync(id: number): Observable<UserAuthenticatedDto> {
    return this.http.delete<UserAuthenticatedDto>(`${ENDPOINTS.userAuthentication}/${id}`).pipe(share());
  }
}
