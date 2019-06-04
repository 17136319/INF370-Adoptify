import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdonorComponent } from './searchdonor.component';

describe('SearchdonorComponent', () => {
  let component: SearchdonorComponent;
  let fixture: ComponentFixture<SearchdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
