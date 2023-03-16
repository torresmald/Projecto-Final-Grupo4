import { TestBed } from '@angular/core/testing';

import { ApiTeachersService } from './api-teachers.service';

describe('ApiTeachersService', () => {
  let service: ApiTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
