import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyContactComponent } from './family-contact.component';

describe('FamilyContactComponent', () => {
  let component: FamilyContactComponent;
  let fixture: ComponentFixture<FamilyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
