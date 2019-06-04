import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTreatmentComponent } from './search-treatment.component';

describe('SearchTreatmentComponent', () => {
  let component: SearchTreatmentComponent;
  let fixture: ComponentFixture<SearchTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
