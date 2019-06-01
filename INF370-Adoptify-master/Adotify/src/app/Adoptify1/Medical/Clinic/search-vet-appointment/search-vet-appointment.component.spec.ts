import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVetAppointmentComponent } from './search-vet-appointment.component';

describe('SearchVetAppointmentComponent', () => {
  let component: SearchVetAppointmentComponent;
  let fixture: ComponentFixture<SearchVetAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVetAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVetAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
