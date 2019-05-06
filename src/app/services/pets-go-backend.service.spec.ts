import { TestBed } from '@angular/core/testing';

import { PetsGoBackendService } from './pets-go-backend.service';

describe('PetsGoBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetsGoBackendService = TestBed.get(PetsGoBackendService);
    expect(service).toBeTruthy();
  });
});
