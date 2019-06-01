import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKennelComponent } from './add-kennel.component';

describe('AddKennelComponent', () => {
  let component: AddKennelComponent;
  let fixture: ComponentFixture<AddKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
