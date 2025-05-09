import { TestBed } from '@angular/core/testing';

import { FilesDetailService } from './files-detail.service';

describe('FilesDetailService', () => {
  let service: FilesDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
