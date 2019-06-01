import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAdoptionDocumentComponent } from './capture-adoption-document.component';

describe('CaptureAdoptionDocumentComponent', () => {
  let component: CaptureAdoptionDocumentComponent;
  let fixture: ComponentFixture<CaptureAdoptionDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureAdoptionDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAdoptionDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
