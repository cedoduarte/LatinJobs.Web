import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRoleDto, UpdateUserRoleDto, UserRoleViewModel } from '../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  constructor(private readonly http: HttpClient) { }

  create(createUserRoleDto: CreateUserRoleDto): Observable<UserRoleViewModel> {
    return this.http.post<UserRoleViewModel>(`${ENDPOINTS.userRole}`, createUserRoleDto).pipe(share());
  }

  findAll(): Observable<UserRoleViewModel[]> {
    return this.http.get<UserRoleViewModel[]>(`${ENDPOINTS.userRole}`).pipe(share());
  }

  findOneByUserId(userId: number): Observable<UserRoleViewModel> {
    return this.http.get<UserRoleViewModel>(`${ENDPOINTS.userRole}/${userId}`).pipe(share());
  }

  update(updateUserRoleDto: UpdateUserRoleDto): Observable<UserRoleViewModel> {
    return this.http.put<UserRoleViewModel>(`${ENDPOINTS.userRole}`, updateUserRoleDto).pipe(share());
  }

  removeByUserId(userId: number): Observable<UserRoleViewModel> {
    return this.http.delete<UserRoleViewModel>(`${ENDPOINTS.userRole}/${userId}`).pipe(share());
  }
}
