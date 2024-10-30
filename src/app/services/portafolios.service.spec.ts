import { TestBed } from '@angular/core/testing';

import { PortafoliosService } from './portafolios.service';

describe('PortafoliosService', () => {
  let service: PortafoliosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafoliosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
