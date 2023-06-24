import { TestBed } from '@angular/core/testing';

import { VacunasServiceService } from './vacunas-service.service';

describe('VacunasServiceService', () => {
  let service: VacunasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacunasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
