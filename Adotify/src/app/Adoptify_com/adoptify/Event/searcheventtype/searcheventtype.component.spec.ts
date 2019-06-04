import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheventtypeComponent } from './searcheventtype.component';

describe('SearcheventtypeComponent', () => {
  let component: SearcheventtypeComponent;
  let fixture: ComponentFixture<SearcheventtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcheventtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcheventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
