import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdonationComponent } from './searchdonation.component';

describe('SearchdonationComponent', () => {
  let component: SearchdonationComponent;
  let fixture: ComponentFixture<SearchdonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
