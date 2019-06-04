import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureMedicalCardComponent } from './capture-medical-card.component';

describe('CaptureMedicalCardComponent', () => {
  let component: CaptureMedicalCardComponent;
  let fixture: ComponentFixture<CaptureMedicalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureMedicalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureMedicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
