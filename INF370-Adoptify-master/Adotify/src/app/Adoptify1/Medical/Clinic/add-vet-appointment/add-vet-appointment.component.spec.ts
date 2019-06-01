import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVetAppointmentComponent } from './add-vet-appointment.component';

describe('AddVetAppointmentComponent', () => {
  let component: AddVetAppointmentComponent;
  let fixture: ComponentFixture<AddVetAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVetAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVetAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
