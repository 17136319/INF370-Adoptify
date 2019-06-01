import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVetComponent } from './search-vet.component';

describe('SearchVetComponent', () => {
  let component: SearchVetComponent;
  let fixture: ComponentFixture<SearchVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
