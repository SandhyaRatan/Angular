/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataRouteService } from './DataRoute.service';

describe('Service: DataRoute', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRouteService]
    });
  });

  it('should ...', inject([DataRouteService], (service: DataRouteService) => {
    expect(service).toBeTruthy();
  }));
});
