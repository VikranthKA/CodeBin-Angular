import { TestBed } from '@angular/core/testing';

import { UpdateSnippetService } from './update-snippet.service';

describe('UpdateSnippetService', () => {
  let service: UpdateSnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
