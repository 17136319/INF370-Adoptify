import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAintainStockComponent } from './maintain-stock.component';

describe('MAintainStockComponent', () => {
  let component: MAintainStockComponent;
  let fixture: ComponentFixture<MAintainStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAintainStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAintainStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
