import { TestBed } from '@angular/core/testing';

import { BasicInterceptorService } from './basic-interceptor.service';

describe('BasicInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicInterceptorService = TestBed.get(BasicInterceptorService);
    expect(service).toBeTruthy();
  });
});
