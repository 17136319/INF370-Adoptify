import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStockTypeComponent } from './search-stock-type.component';

describe('SearchStockTypeComponent', () => {
  let component: SearchStockTypeComponent;
  let fixture: ComponentFixture<SearchStockTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStockTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStockTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
