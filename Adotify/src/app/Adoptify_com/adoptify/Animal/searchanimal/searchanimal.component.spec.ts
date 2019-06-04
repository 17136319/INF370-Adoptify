import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchanimalComponent } from './searchanimal.component';

describe('SearchanimalComponent', () => {
  let component: SearchanimalComponent;
  let fixture: ComponentFixture<SearchanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
