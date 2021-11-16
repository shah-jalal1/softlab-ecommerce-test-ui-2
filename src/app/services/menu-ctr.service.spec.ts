import { TestBed } from '@angular/core/testing';

import { MenuCtrService } from './menu-ctr.service';

describe('MenuCtrService', () => {
  let service: MenuCtrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCtrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
