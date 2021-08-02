import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTicketComponent } from './inventory-ticket.component';

describe('InventoryTicketComponent', () => {
  let component: InventoryTicketComponent;
  let fixture: ComponentFixture<InventoryTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
