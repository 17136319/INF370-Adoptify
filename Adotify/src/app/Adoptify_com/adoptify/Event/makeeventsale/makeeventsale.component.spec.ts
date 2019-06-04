import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeeventsaleComponent } from './makeeventsale.component';

describe('MakeeventsaleComponent', () => {
  let component: MakeeventsaleComponent;
  let fixture: ComponentFixture<MakeeventsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeeventsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeeventsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
