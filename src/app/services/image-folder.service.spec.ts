import { TestBed } from '@angular/core/testing';

import { ImageFolderService } from './image-folder.service';

describe('ImageFolderService', () => {
  let service: ImageFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
