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

  public create(createPermissionDto: CreatePermissionDto): Observable<PermissionViewModel> {
    return this.http.post<PermissionViewModel>(`${ENDPOINTS.permission}`, createPermissionDto).pipe(share());
  }

  public findAll(): Observable<PermissionViewModel[]> {
    return this.http.get<PermissionViewModel[]>(`${ENDPOINTS.permission}`).pipe(share());
  }

  public findOne(id: number): Observable<PermissionViewModel> {
    return this.http.get<PermissionViewModel>(`${ENDPOINTS.permission}/${id}`).pipe(share());
  }

  public update(updatePermissionDto: UpdatePermissionDto): Observable<PermissionViewModel> {
    return this.http.put<PermissionViewModel>(`${ENDPOINTS.permission}`, updatePermissionDto).pipe(share());
  }
  
  public softDelete(id: number): Observable<PermissionViewModel> {
    return this.http.delete<PermissionViewModel>(`${ENDPOINTS.permission}/soft/${id}`).pipe(share());
  }
  
  public remove(id: number): Observable<PermissionViewModel> {
    return this.http.delete<PermissionViewModel>(`${ENDPOINTS.permission}/hard/${id}`).pipe(share());
  }
}
