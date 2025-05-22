import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticationPanelComponent } from './user-authentication-panel.component';

describe('UserAuthenticationPanelComponent', () => {
  let component: UserAuthenticationPanelComponent;
  let fixture: ComponentFixture<UserAuthenticationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAuthenticationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthenticationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
