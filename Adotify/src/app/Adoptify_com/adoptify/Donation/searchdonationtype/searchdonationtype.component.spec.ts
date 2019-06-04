import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdonationtypeComponent } from './searchdonationtype.component';

describe('SearchdonationtypeComponent', () => {
  let component: SearchdonationtypeComponent;
  let fixture: ComponentFixture<SearchdonationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdonationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdonationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
