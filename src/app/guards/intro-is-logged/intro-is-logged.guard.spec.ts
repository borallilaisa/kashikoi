import { TestBed } from '@angular/core/testing';

import { IntroIsLoggedGuard } from './intro-is-logged.guard';

describe('IntroIsLoggedGuard', () => {
  let guard: IntroIsLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroIsLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
