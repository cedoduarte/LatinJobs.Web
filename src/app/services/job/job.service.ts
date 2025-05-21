import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateJobDto, JobViewModel, UpdateJobDto } from '../../shared/types';
import { Observable, share } from 'rxjs';
import { ENDPOINTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private readonly http: HttpClient) { }

  create(createJobDto: CreateJobDto): Observable<JobViewModel> {
    return this.http.post<JobViewModel>(`${ENDPOINTS.job}`, createJobDto).pipe(share());
  }

  findAll(): Observable<JobViewModel[]> {
    return this.http.get<JobViewModel[]>(`${ENDPOINTS.job}`).pipe(share());
  }

  findOne(id: number): Observable<JobViewModel> {
    return this.http.get<JobViewModel>(`${ENDPOINTS.job}/${id}`).pipe(share());
  }
  
  update(updateJobDto: UpdateJobDto): Observable<JobViewModel> {
    return this.http.put<JobViewModel>(`${ENDPOINTS.job}`, updateJobDto).pipe(share());
  }

  softDelete(id: number): Observable<JobViewModel> {
    return this.http.delete<JobViewModel>(`${ENDPOINTS.job}/soft/${id}`).pipe(share());
  }
  
  remove(id: number): Observable<JobViewModel> {
    return this.http.delete<JobViewModel>(`${ENDPOINTS.job}/hard/${id}`).pipe(share());
  }
}
