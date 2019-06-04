import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanimaltypeComponent } from './addanimaltype.component';

describe('AddanimaltypeComponent', () => {
  let component: AddanimaltypeComponent;
  let fixture: ComponentFixture<AddanimaltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddanimaltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanimaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
