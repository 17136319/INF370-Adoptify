import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAdoptionHomeCheckReportComponent } from './capture-adoption-home-check-report.component';

describe('CaptureAdoptionHomeCheckReportComponent', () => {
  let component: CaptureAdoptionHomeCheckReportComponent;
  let fixture: ComponentFixture<CaptureAdoptionHomeCheckReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureAdoptionHomeCheckReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAdoptionHomeCheckReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
