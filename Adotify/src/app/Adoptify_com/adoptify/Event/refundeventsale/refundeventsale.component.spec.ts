import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundeventsaleComponent } from './refundeventsale.component';

describe('RefundeventsaleComponent', () => {
  let component: RefundeventsaleComponent;
  let fixture: ComponentFixture<RefundeventsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundeventsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundeventsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
