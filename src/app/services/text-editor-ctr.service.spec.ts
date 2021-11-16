import { TestBed } from '@angular/core/testing';

import { TextEditorCtrService } from './text-editor-ctr.service';

describe('TextEditorCtrService', () => {
  let service: TextEditorCtrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextEditorCtrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
