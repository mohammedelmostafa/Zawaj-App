/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntitiesService } from './Entities.service';

describe('Service: Entities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitiesService]
    });
  });

  it('should ...', inject([EntitiesService], (service: EntitiesService) => {
    expect(service).toBeTruthy();
  }));
});
