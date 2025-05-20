import { TestBed } from '@angular/core/testing';

import { HomeFormService } from './home-form.service';

describe('HomeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeFormService = TestBed.get(HomeFormService);
    expect(service).toBeTruthy();
  });
});
