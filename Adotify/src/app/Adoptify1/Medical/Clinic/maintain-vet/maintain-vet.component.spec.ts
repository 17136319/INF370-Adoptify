import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainVetComponent } from './maintain-vet.component';

describe('MaintainVetComponent', () => {
  let component: MaintainVetComponent;
  let fixture: ComponentFixture<MaintainVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
