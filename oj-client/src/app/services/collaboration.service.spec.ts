/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollaborationService } from './collaboration.service';

describe('CollaborationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaborationService]
    });
  });

  it('should ...', inject([CollaborationService], (service: CollaborationService) => {
    expect(service).toBeTruthy();
  }));
});
