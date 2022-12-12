import { TestBed } from '@angular/core/testing';

import { DatosPorfolioService } from './datosPorfolio.service';

describe('DatosPorfolioService', () => {
  let service: DatosPorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
