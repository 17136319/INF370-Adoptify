import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainVetAppointmentComponent } from './maintain-vet-appointment.component';

describe('MaintainVetAppointmentComponent', () => {
  let component: MaintainVetAppointmentComponent;
  let fixture: ComponentFixture<MaintainVetAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainVetAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainVetAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
