import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAnimalComponent } from './return-animal.component';

describe('ReturnAnimalComponent', () => {
  let component: ReturnAnimalComponent;
  let fixture: ComponentFixture<ReturnAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
