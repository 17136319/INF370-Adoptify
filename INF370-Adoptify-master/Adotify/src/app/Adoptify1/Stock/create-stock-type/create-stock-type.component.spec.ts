import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockTypeComponent } from './create-stock-type.component';

describe('CreateStockTypeComponent', () => {
  let component: CreateStockTypeComponent;
  let fixture: ComponentFixture<CreateStockTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
