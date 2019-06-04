import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvolunteerworktypeComponent } from './addvolunteerworktype.component';

describe('AddvolunteerworktypeComponent', () => {
  let component: AddvolunteerworktypeComponent;
  let fixture: ComponentFixture<AddvolunteerworktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvolunteerworktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvolunteerworktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
