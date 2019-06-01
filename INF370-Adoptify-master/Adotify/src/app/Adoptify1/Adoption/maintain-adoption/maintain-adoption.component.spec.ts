import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainAdoptionComponent } from './maintain-adoption.component';

describe('MaintainAdoptionComponent', () => {
  let component: MaintainAdoptionComponent;
  let fixture: ComponentFixture<MaintainAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
