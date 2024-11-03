import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { ENDPOINTS, HEADERS } from 'src/app/shared/constants';
import { AuthenticatedDto, AuthenticateDto } from 'src/app/shared/types';

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
