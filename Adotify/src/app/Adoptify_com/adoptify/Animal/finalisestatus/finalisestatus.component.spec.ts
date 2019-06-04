import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisestatusComponent } from './finalisestatus.component';

describe('FinalisestatusComponent', () => {
  let component: FinalisestatusComponent;
  let fixture: ComponentFixture<FinalisestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalisestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
