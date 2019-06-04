import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreedtypeComponent } from './addbreedtype.component';

describe('AddbreedtypeComponent', () => {
  let component: AddbreedtypeComponent;
  let fixture: ComponentFixture<AddbreedtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreedtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
