import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimanimalComponent } from './claimanimal.component';

describe('ClaimanimalComponent', () => {
  let component: ClaimanimalComponent;
  let fixture: ComponentFixture<ClaimanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
