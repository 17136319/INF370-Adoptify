import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBookComponent } from './medical-book.component';

describe('MedicalBookComponent', () => {
  let component: MedicalBookComponent;
  let fixture: ComponentFixture<MedicalBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
