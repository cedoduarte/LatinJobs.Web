import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePermissionDto, PermissionViewModel, UpdatePermissionDto } from '../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private readonly http: HttpClient) { }

  create(createPermissionDto: CreatePermissionDto): Observable<PermissionViewModel> {
    return this.http.post<PermissionViewModel>(`${ENDPOINTS.permission}`, createPermissionDto).pipe(share());
  }

  findAll(): Observable<PermissionViewModel[]> {
    return this.http.get<PermissionViewModel[]>(`${ENDPOINTS.permission}`).pipe(share());
  }

  findOne(id: number): Observable<PermissionViewModel> {
    return this.http.get<PermissionViewModel>(`${ENDPOINTS.permission}/${id}`).pipe(share());
  }

  update(updatePermissionDto: UpdatePermissionDto): Observable<PermissionViewModel> {
    return this.http.put<PermissionViewModel>(`${ENDPOINTS.permission}`, updatePermissionDto).pipe(share());
  }
  
  softDelete(id: number): Observable<PermissionViewModel> {
    return this.http.delete<PermissionViewModel>(`${ENDPOINTS.permission}/soft/${id}`).pipe(share());
  }
  
  remove(id: number): Observable<PermissionViewModel> {
    return this.http.delete<PermissionViewModel>(`${ENDPOINTS.permission}/hard/${id}`).pipe(share());
  }
}
