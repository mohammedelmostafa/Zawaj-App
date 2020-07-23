/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndividualsService } from './Individuals.service';

describe('Service: Individuals', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualsService]
    });
  });

  it('should ...', inject([IndividualsService], (service: IndividualsService) => {
    expect(service).toBeTruthy();
  }));
});
