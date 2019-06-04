import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdoptionComponent } from './search-adoption.component';

describe('SearchAdoptionComponent', () => {
  let component: SearchAdoptionComponent;
  let fixture: ComponentFixture<SearchAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
