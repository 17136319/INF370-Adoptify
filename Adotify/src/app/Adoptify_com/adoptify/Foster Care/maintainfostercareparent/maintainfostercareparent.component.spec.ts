import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainfostercareparentComponent } from './maintainfostercareparent.component';

describe('MaintainfostercareparentComponent', () => {
  let component: MaintainfostercareparentComponent;
  let fixture: ComponentFixture<MaintainfostercareparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainfostercareparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainfostercareparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
