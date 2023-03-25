import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContactComponent } from './teacher-contact.component';

describe('TeacherContactComponent', () => {
  let component: TeacherContactComponent;
  let fixture: ComponentFixture<TeacherContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
