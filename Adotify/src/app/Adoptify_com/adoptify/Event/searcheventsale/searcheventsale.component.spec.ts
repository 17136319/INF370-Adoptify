import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheventsaleComponent } from './searcheventsale.component';

describe('SearcheventsaleComponent', () => {
  let component: SearcheventsaleComponent;
  let fixture: ComponentFixture<SearcheventsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcheventsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcheventsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
