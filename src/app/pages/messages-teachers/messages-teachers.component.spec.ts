import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTeachersComponent } from './messages-teachers.component';

describe('MessagesTeachersComponent', () => {
  let component: MessagesTeachersComponent;
  let fixture: ComponentFixture<MessagesTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
