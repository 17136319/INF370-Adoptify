import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAdoptionHomeCheckComponent } from './schedule-adoption-home-check.component';

describe('ScheduleAdoptionHomeCheckComponent', () => {
  let component: ScheduleAdoptionHomeCheckComponent;
  let fixture: ComponentFixture<ScheduleAdoptionHomeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAdoptionHomeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAdoptionHomeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
