import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAdoptionComponent } from './completed-adoption.component';

describe('CompletedAdoptionComponent', () => {
  let component: CompletedAdoptionComponent;
  let fixture: ComponentFixture<CompletedAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
