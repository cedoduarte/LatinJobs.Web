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

  create(createAuthenticationDto: CreateUserAuthenticationDto): Observable<UserAuthenticationViewModel> {
    return this.http.post<UserAuthenticationViewModel>(ENDPOINTS.userAuthentication, createAuthenticationDto).pipe(share());
  }

  findAllAsync(): Observable<UserAuthenticatedDto[]> {
    return this.http.get<UserAuthenticatedDto[]>(ENDPOINTS.userAuthentication).pipe(share());
  }

  findByUserIdAsync(userId: number): Observable<UserAuthenticatedDto> {
    return this.http.get<UserAuthenticatedDto>(`${ENDPOINTS.userAuthentication}/${userId}`).pipe(share());
  }

  removeAsync(id: number): Observable<UserAuthenticatedDto> {
    return this.http.delete<UserAuthenticatedDto>(`${ENDPOINTS.userAuthentication}/${id}`).pipe(share());
  }
}
