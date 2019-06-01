import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAnimalToKennelComponent } from './move-animal-to-kennel.component';

describe('MoveAnimalToKennelComponent', () => {
  let component: MoveAnimalToKennelComponent;
  let fixture: ComponentFixture<MoveAnimalToKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveAnimalToKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveAnimalToKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
