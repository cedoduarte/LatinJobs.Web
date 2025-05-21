import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      { 
        path: 'search-jobs', 
        component: SearchJobsComponent 
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
