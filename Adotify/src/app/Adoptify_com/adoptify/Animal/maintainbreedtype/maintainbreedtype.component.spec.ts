import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainbreedtypeComponent } from './maintainbreedtype.component';

describe('MaintainbreedtypeComponent', () => {
  let component: MaintainbreedtypeComponent;
  let fixture: ComponentFixture<MaintainbreedtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainbreedtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainbreedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
