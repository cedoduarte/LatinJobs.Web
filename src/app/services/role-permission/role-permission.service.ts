import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRolePermissionDto, PermissionViewModel, RolePermissionViewModel } from '../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionService {
  constructor(private readonly http: HttpClient) { }
   
  public create(createRolePermissionDto: CreateRolePermissionDto): Observable<RolePermissionViewModel> {
    return this.http.post<RolePermissionViewModel>(`${ENDPOINTS.rolePermission}`, createRolePermissionDto).pipe(share());
  }

  public findAll(): Observable<RolePermissionViewModel[]> {
    return this.http.get<RolePermissionViewModel[]>(`${ENDPOINTS.rolePermission}`).pipe(share());
  }

  public getPermissions(roleId: number): Observable<PermissionViewModel[]> {
    return this.http.get<PermissionViewModel[]>(`${ENDPOINTS.rolePermission}/${roleId}`).pipe(share());
  }
  
  public remove(roleId: number, permissionId: number): Observable<RolePermissionViewModel> {
    return this.http.delete<RolePermissionViewModel>(`${ENDPOINTS.rolePermission}/role/${roleId}/permission/${permissionId}`).pipe(share());
  }
}
