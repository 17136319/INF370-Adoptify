import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfostercareparentComponent } from './searchfostercareparent.component';

describe('SearchfostercareparentComponent', () => {
  let component: SearchfostercareparentComponent;
  let fixture: ComponentFixture<SearchfostercareparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfostercareparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfostercareparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
