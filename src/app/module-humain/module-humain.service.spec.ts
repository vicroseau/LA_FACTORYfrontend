import { TestBed } from '@angular/core/testing';

import { ModuleHumainService } from './module-humain.service';

describe('ModuleHumainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleHumainService = TestBed.get(ModuleHumainService);
    expect(service).toBeTruthy();
  });
});
