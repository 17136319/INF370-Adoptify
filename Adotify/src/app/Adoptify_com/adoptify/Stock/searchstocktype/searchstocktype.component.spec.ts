import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstocktypeComponent } from './searchstocktype.component';

describe('SearchstocktypeComponent', () => {
  let component: SearchstocktypeComponent;
  let fixture: ComponentFixture<SearchstocktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchstocktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstocktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
