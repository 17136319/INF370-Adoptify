import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaineventtypeComponent } from './maintaineventtype.component';

describe('MaintaineventtypeComponent', () => {
  let component: MaintaineventtypeComponent;
  let fixture: ComponentFixture<MaintaineventtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaineventtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaineventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
