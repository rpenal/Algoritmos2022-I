import { TestBed } from '@angular/core/testing';

import { BurgerGeneratorService } from './burger-generator.service';

describe('BurgerGeneratorService', () => {
  let service: BurgerGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
