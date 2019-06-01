import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectAnimalComponent } from './collect-animal.component';

describe('CollectAnimalComponent', () => {
  let component: CollectAnimalComponent;
  let fixture: ComponentFixture<CollectAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
