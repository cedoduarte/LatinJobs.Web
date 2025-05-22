import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { JobPanelComponent } from './job-panel/job-panel.component';
import { PermissionPanelComponent } from './permission-panel/permission-panel.component';
import { RolePanelComponent } from './role-panel/role-panel.component';
import { RolePermissionPanelComponent } from './role-permission-panel/role-permission-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserAuthenticationPanelComponent } from './user-authentication-panel/user-authentication-panel.component';
import { UserRolePanelComponent } from './user-role-panel/user-role-panel.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    JobPanelComponent,
    PermissionPanelComponent,
    RolePanelComponent,
    RolePermissionPanelComponent,
    UserPanelComponent,
    UserAuthenticationPanelComponent,
    UserRolePanelComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
