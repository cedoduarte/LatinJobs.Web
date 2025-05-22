import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionPanelComponent } from './permission-panel.component';

describe('PermissionPanelComponent', () => {
  let component: PermissionPanelComponent;
  let fixture: ComponentFixture<PermissionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
