import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaindonationComponent } from './maintaindonation.component';

describe('MaintaindonationComponent', () => {
  let component: MaintaindonationComponent;
  let fixture: ComponentFixture<MaintaindonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaindonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaindonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
