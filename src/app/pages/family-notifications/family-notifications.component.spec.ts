import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyNotificationsComponent } from './family-notifications.component';

describe('FamilyNotificationsComponent', () => {
  let component: FamilyNotificationsComponent;
  let fixture: ComponentFixture<FamilyNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
