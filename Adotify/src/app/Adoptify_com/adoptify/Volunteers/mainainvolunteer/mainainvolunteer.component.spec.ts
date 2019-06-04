import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainainvolunteerComponent } from './mainainvolunteer.component';

describe('MainainvolunteerComponent', () => {
  let component: MainainvolunteerComponent;
  let fixture: ComponentFixture<MainainvolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainainvolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainainvolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
