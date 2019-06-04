import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkennelComponent } from './addkennel.component';

describe('AddkennelComponent', () => {
  let component: AddkennelComponent;
  let fixture: ComponentFixture<AddkennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
