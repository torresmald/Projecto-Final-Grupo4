import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingWritingActivitiesComponent } from './reading-writing-activities.component';

describe('ReadingWritingActivitiesComponent', () => {
  let component: ReadingWritingActivitiesComponent;
  let fixture: ComponentFixture<ReadingWritingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingWritingActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingWritingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
