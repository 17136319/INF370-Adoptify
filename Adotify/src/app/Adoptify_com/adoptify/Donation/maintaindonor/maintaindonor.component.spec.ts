import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaindonorComponent } from './maintaindonor.component';

describe('MaintaindonorComponent', () => {
  let component: MaintaindonorComponent;
  let fixture: ComponentFixture<MaintaindonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaindonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaindonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
