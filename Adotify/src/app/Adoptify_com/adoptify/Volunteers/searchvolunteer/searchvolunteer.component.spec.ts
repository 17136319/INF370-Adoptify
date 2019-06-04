import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvolunteerComponent } from './searchvolunteer.component';

describe('SearchvolunteerComponent', () => {
  let component: SearchvolunteerComponent;
  let fixture: ComponentFixture<SearchvolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchvolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchvolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
