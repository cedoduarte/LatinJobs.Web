import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermissionPanelComponent } from './role-permission-panel.component';

describe('RolePermissionPanelComponent', () => {
  let component: RolePermissionPanelComponent;
  let fixture: ComponentFixture<RolePermissionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolePermissionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolePermissionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
