import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedDto, AuthenticateDto } from '../../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS, HEADERS } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  authenticate(authenticateDto: AuthenticateDto): Observable<AuthenticatedDto> {
    return this.http.post<AuthenticatedDto>(
      ENDPOINTS.authenticate, 
      authenticateDto, 
      { headers: HEADERS }
    ).pipe(share());
  }
}
