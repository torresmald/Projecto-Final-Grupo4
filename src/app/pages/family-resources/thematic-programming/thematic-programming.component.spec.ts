import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicProgrammingComponent } from './thematic-programming.component';

describe('ThematicProgrammingComponent', () => {
  let component: ThematicProgrammingComponent;
  let fixture: ComponentFixture<ThematicProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThematicProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
