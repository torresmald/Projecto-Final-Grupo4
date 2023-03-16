import { TestBed } from '@angular/core/testing';

import { ApiParentsService } from './api-parents.service';

describe('ApiParentsService', () => {
  let service: ApiParentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiParentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
