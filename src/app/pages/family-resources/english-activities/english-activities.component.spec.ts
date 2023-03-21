import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishActivitiesComponent } from './english-activities.component';

describe('EnglishActivitiesComponent', () => {
  let component: EnglishActivitiesComponent;
  let fixture: ComponentFixture<EnglishActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
