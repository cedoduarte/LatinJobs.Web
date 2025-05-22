import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolePanelComponent } from './user-role-panel.component';

describe('UserRolePanelComponent', () => {
  let component: UserRolePanelComponent;
  let fixture: ComponentFixture<UserRolePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRolePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRolePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
