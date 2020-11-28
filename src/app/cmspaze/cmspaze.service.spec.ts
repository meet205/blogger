import { TestBed } from '@angular/core/testing';

import { CmspazeService } from './cmspaze.service';

describe('CmspazeService', () => {
  let service: CmspazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmspazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
