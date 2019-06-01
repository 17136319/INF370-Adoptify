import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainAdopterComponent } from './maintain-adopter.component';

describe('MaintainAdopterComponent', () => {
  let component: MaintainAdopterComponent;
  let fixture: ComponentFixture<MaintainAdopterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainAdopterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainAdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
