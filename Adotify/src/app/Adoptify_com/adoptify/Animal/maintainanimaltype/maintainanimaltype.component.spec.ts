import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanimaltypeComponent } from './maintainanimaltype.component';

describe('MaintainanimaltypeComponent', () => {
  let component: MaintainanimaltypeComponent;
  let fixture: ComponentFixture<MaintainanimaltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanimaltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanimaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
