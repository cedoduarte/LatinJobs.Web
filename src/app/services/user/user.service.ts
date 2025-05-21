import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { CreateUserDto, UpdateUserDto, UserViewModel } from '../../shared/types';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  create(createUserDto: CreateUserDto): Observable<UserViewModel> {
    return this.http.post<UserViewModel>(ENDPOINTS.user, createUserDto).pipe(share());
  }

  findAll(): Observable<UserViewModel[]> {
    return this.http.get<UserViewModel[]>(ENDPOINTS.user).pipe(share());
  }

  findOne(id: number): Observable<UserViewModel> {
    return this.http.get<UserViewModel>(`${ENDPOINTS.user}/find-by-id/${id}`).pipe(share());
  }

  findOneByEmail(email: string): Observable<UserViewModel> {
    return this.http.get<UserViewModel>(`${ENDPOINTS.user}/find-by-email/${email}`).pipe(share());
  }

  update(updateUserDto: UpdateUserDto): Observable<UserViewModel> {
    return this.http.put<UserViewModel>(`${ENDPOINTS.user}/${updateUserDto.id}`, updateUserDto).pipe(share());
  }

  softDelete(id: number): Observable<UserViewModel> {
    return this.http.delete<UserViewModel>(`${ENDPOINTS.user}/soft-delete/${id}`).pipe(share());
  }

  remove(id: number): Observable<UserViewModel> {
    return this.http.delete<UserViewModel>(`${ENDPOINTS.user}/hard-delete/${id}`).pipe(share());
  }
}
