import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUpdatePopupComponent } from './inventory-update-popup.component';

describe('InventoryUpdatePopupComponent', () => {
  let component: InventoryUpdatePopupComponent;
  let fixture: ComponentFixture<InventoryUpdatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryUpdatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
