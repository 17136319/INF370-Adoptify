import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainTreatmentComponent } from './maintain-treatment.component';

describe('MaintainTreatmentComponent', () => {
  let component: MaintainTreatmentComponent;
  let fixture: ComponentFixture<MaintainTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
