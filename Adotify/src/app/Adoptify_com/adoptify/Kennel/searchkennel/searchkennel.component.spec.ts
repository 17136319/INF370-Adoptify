import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchkennelComponent } from './searchkennel.component';

describe('SearchkennelComponent', () => {
  let component: SearchkennelComponent;
  let fixture: ComponentFixture<SearchkennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchkennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchkennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
