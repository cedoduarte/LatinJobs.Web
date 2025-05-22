import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { JobPanelComponent } from './job-panel/job-panel.component';
import { PermissionPanelComponent } from './permission-panel/permission-panel.component';
import { RolePanelComponent } from './role-panel/role-panel.component';
import { RolePermissionPanelComponent } from './role-permission-panel/role-permission-panel.component';
import { UserAuthenticationPanelComponent } from './user-authentication-panel/user-authentication-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserRolePanelComponent } from './user-role-panel/user-role-panel.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent
  },
  {
    path: 'job-panel',
    component: JobPanelComponent
  },
  {
    path: 'permission-panel',
    component: PermissionPanelComponent
  },
  {
    path: 'role-panel',
    component: RolePanelComponent
  },
  {
    path: 'role-permission-panel',
    component: RolePermissionPanelComponent
  },
  {
    path: 'user-authentication-panel',
    component: UserAuthenticationPanelComponent
  },
  {
    path: 'user-panel',
    component: UserPanelComponent
  },
  {
    path: 'user-role-panel',
    component: UserRolePanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
