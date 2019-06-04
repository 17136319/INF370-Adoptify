import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvolunteerworktypeComponent } from './searchvolunteerworktype.component';

describe('SearchvolunteerworktypeComponent', () => {
  let component: SearchvolunteerworktypeComponent;
  let fixture: ComponentFixture<SearchvolunteerworktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchvolunteerworktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchvolunteerworktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
