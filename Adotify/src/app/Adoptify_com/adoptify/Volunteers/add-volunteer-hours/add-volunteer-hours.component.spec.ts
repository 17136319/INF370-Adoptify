import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolunteerHoursComponent } from './add-volunteer-hours.component';

describe('AddVolunteerHoursComponent', () => {
  let component: AddVolunteerHoursComponent;
  let fixture: ComponentFixture<AddVolunteerHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVolunteerHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolunteerHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
