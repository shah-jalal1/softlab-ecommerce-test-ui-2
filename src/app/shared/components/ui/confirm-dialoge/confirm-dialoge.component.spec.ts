import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogeComponent } from './confirm-dialoge.component';

describe('ConfirmDialogeComponent', () => {
  let component: ConfirmDialogeComponent;
  let fixture: ComponentFixture<ConfirmDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
