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

  create(createRoleDto: CreateRoleDto): Observable<RoleViewModel> {
    return this.http.post<RoleViewModel>(`${ENDPOINTS.role}`, createRoleDto).pipe(share());
  }

  findAll(): Observable<RoleViewModel[]> {
    return this.http.get<RoleViewModel[]>(`${ENDPOINTS.role}`).pipe(share());
  }

  findOne(id: number): Observable<RoleViewModel> {
    return this.http.get<RoleViewModel>(`${ENDPOINTS.role}/${id}`).pipe(share());
  }

  findOneByName(name: string): Observable<RoleViewModel> {
    return this.http.get<RoleViewModel>(`${ENDPOINTS.role}/name/${name}`).pipe(share());
  }

  update(updateRoleDto: UpdateRoleDto): Observable<RoleViewModel> {
    return this.http.put<RoleViewModel>(`${ENDPOINTS.role}`, updateRoleDto).pipe(share());
  }

  softDelete(id: number): Observable<RoleViewModel> {
    return this.http.delete<RoleViewModel>(`${ENDPOINTS.role}/soft/${id}`).pipe(share());
  }

  remove(id: number): Observable<RoleViewModel> {
    return this.http.delete<RoleViewModel>(`${ENDPOINTS.role}/hard/${id}`).pipe(share());
  }
}
