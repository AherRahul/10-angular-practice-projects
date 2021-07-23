import { TestBed } from '@angular/core/testing';

import { GitHubService } from './git-hub.service';

describe('GitHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubService = TestBed.get(GitHubService);
    expect(service).toBeTruthy();
  });
});
