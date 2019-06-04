import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbreedtypeComponent } from './searchbreedtype.component';

describe('SearchbreedtypeComponent', () => {
  let component: SearchbreedtypeComponent;
  let fixture: ComponentFixture<SearchbreedtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbreedtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbreedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
