import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyResourcesComponent } from './family-resources.component';

describe('FamilyResourcesComponent', () => {
  let component: FamilyResourcesComponent;
  let fixture: ComponentFixture<FamilyResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
