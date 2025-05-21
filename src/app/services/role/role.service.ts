import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { CreateRoleDto, RoleViewModel, UpdateRoleDto } from '../../shared/types';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private readonly http: HttpClient) { }

  public create(createRoleDto: CreateRoleDto): Observable<RoleViewModel> {
    return this.http.post<RoleViewModel>(`${ENDPOINTS.role}`, createRoleDto).pipe(share());
  }

  public findAll(): Observable<RoleViewModel[]> {
    return this.http.get<RoleViewModel[]>(`${ENDPOINTS.role}`).pipe(share());
  }

  public findOne(id: number): Observable<RoleViewModel> {
    return this.http.get<RoleViewModel>(`${ENDPOINTS.role}/${id}`).pipe(share());
  }

  public findOneByName(name: string): Observable<RoleViewModel> {
    return this.http.get<RoleViewModel>(`${ENDPOINTS.role}/name/${name}`).pipe(share());
  }

  public update(updateRoleDto: UpdateRoleDto): Observable<RoleViewModel> {
    return this.http.put<RoleViewModel>(`${ENDPOINTS.role}`, updateRoleDto).pipe(share());
  }

  public softDelete(id: number): Observable<RoleViewModel> {
    return this.http.delete<RoleViewModel>(`${ENDPOINTS.role}/soft/${id}`).pipe(share());
  }

  public remove(id: number): Observable<RoleViewModel> {
    return this.http.delete<RoleViewModel>(`${ENDPOINTS.role}/hard/${id}`).pipe(share());
  }
}
