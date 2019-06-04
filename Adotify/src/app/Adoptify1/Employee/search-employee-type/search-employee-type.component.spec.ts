import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeTypeComponent } from './search-employee-type.component';

describe('SearchEmployeeTypeComponent', () => {
  let component: SearchEmployeeTypeComponent;
  let fixture: ComponentFixture<SearchEmployeeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmployeeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
