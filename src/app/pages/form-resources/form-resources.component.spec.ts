import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResourcesComponent } from './form-resources.component';

describe('FormResourcesComponent', () => {
  let component: FormResourcesComponent;
  let fixture: ComponentFixture<FormResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
