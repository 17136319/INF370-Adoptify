import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainKennelComponent } from './maintain-kennel.component';

describe('MaintainKennelComponent', () => {
  let component: MaintainKennelComponent;
  let fixture: ComponentFixture<MaintainKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
