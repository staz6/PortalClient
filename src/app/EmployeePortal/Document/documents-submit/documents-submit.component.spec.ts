import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSubmitComponent } from './documents-submit.component';

describe('DocumentsSubmitComponent', () => {
  let component: DocumentsSubmitComponent;
  let fixture: ComponentFixture<DocumentsSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
