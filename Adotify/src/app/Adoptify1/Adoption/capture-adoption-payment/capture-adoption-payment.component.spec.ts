import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAdoptionPaymentComponent } from './capture-adoption-payment.component';

describe('CaptureAdoptionPaymentComponent', () => {
  let component: CaptureAdoptionPaymentComponent;
  let fixture: ComponentFixture<CaptureAdoptionPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureAdoptionPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAdoptionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
