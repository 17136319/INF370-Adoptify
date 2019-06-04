import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaineventComponent } from './maintainevent.component';

describe('MaintaineventComponent', () => {
  let component: MaintaineventComponent;
  let fixture: ComponentFixture<MaintaineventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaineventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaineventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
