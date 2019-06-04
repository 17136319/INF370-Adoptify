import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaindonationtypeComponent } from './maintaindonationtype.component';

describe('MaintaindonationtypeComponent', () => {
  let component: MaintaindonationtypeComponent;
  let fixture: ComponentFixture<MaintaindonationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaindonationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaindonationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
