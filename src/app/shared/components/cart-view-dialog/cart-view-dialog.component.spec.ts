import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewDialogComponent } from './cart-view-dialog.component';

describe('CartViewDialogComponent', () => {
  let component: CartViewDialogComponent;
  let fixture: ComponentFixture<CartViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
