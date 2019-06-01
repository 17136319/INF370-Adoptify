import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKennelComponent } from './search-kennel.component';

describe('SearchKennelComponent', () => {
  let component: SearchKennelComponent;
  let fixture: ComponentFixture<SearchKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
