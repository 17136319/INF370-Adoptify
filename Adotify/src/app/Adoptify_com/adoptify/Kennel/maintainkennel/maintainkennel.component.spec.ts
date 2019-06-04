import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainkennelComponent } from './maintainkennel.component';

describe('MaintainkennelComponent', () => {
  let component: MaintainkennelComponent;
  let fixture: ComponentFixture<MaintainkennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainkennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainkennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
