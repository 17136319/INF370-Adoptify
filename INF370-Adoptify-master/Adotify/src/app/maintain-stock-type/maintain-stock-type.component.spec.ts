import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainStockTypeComponent } from './maintain-stock-type.component';

describe('MaintainStockTypeComponent', () => {
  let component: MaintainStockTypeComponent;
  let fixture: ComponentFixture<MaintainStockTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainStockTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainStockTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
