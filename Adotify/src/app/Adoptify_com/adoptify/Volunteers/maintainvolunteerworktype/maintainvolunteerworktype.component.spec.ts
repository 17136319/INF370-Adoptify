import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainvolunteerworktypeComponent } from './maintainvolunteerworktype.component';

describe('MaintainvolunteerworktypeComponent', () => {
  let component: MaintainvolunteerworktypeComponent;
  let fixture: ComponentFixture<MaintainvolunteerworktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainvolunteerworktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainvolunteerworktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
