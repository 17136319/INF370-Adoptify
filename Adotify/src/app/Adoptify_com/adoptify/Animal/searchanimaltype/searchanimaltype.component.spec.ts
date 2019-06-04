import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchanimaltypeComponent } from './searchanimaltype.component';

describe('SearchanimaltypeComponent', () => {
  let component: SearchanimaltypeComponent;
  let fixture: ComponentFixture<SearchanimaltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchanimaltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchanimaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
