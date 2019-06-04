import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFosterCareComponent } from './add-foster-care.component';

describe('AddFosterCareComponent', () => {
  let component: AddFosterCareComponent;
  let fixture: ComponentFixture<AddFosterCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFosterCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFosterCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
