import { TestBed, inject } from '@angular/core/testing';

import { GetOneItemDetailsService } from './get-one-item-details.service';

describe('GetOneItemDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneItemDetailsService]
    });
  });

  it('should be created', inject([GetOneItemDetailsService], (service: GetOneItemDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
