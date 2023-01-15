import { TestBed } from '@angular/core/testing';

import { NFTServiceService } from './nft-service.service';

describe('NFTServiceService', () => {
  let service: NFTServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NFTServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
