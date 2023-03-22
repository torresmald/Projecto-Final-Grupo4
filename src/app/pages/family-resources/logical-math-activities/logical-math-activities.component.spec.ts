import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalMathActivitiesComponent } from './logical-math-activities.component';

describe('LogicalMathActivitiesComponent', () => {
  let component: LogicalMathActivitiesComponent;
  let fixture: ComponentFixture<LogicalMathActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalMathActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicalMathActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
