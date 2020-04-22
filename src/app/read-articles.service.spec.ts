import { TestBed } from '@angular/core/testing';

import { ReadArticlesService } from './read-articles.service';

describe('ReadArticlesService', () => {
  let service: ReadArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
