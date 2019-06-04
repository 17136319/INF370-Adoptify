import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtokennelComponent } from './addtokennel.component';

describe('AddtokennelComponent', () => {
  let component: AddtokennelComponent;
  let fixture: ComponentFixture<AddtokennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtokennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtokennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
