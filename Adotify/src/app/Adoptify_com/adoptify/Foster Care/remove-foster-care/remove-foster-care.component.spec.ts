import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFosterCareComponent } from './remove-foster-care.component';

describe('RemoveFosterCareComponent', () => {
  let component: RemoveFosterCareComponent;
  let fixture: ComponentFixture<RemoveFosterCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFosterCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFosterCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
