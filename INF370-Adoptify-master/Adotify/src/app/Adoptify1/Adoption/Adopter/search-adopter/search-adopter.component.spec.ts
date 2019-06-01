import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdopterComponent } from './search-adopter.component';

describe('SearchAdopterComponent', () => {
  let component: SearchAdopterComponent;
  let fixture: ComponentFixture<SearchAdopterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdopterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
