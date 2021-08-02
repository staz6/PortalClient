import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeinfomodalComponent } from './editemployeeinfomodal.component';

describe('EditemployeeinfomodalComponent', () => {
  let component: EditemployeeinfomodalComponent;
  let fixture: ComponentFixture<EditemployeeinfomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeeinfomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeeinfomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
