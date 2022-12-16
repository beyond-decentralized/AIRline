import { TestBed } from '@angular/core/testing';

import { GoalInfoService } from './goal-info.service';

describe('GoalInfoService', () => {
  let service: GoalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
