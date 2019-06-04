import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainEmployeeTypeComponent } from './maintain-employee-type.component';

describe('MaintainEmployeeTypeComponent', () => {
  let component: MaintainEmployeeTypeComponent;
  let fixture: ComponentFixture<MaintainEmployeeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainEmployeeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainEmployeeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
