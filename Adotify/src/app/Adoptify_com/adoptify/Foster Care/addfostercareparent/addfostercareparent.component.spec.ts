import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfostercareparentComponent } from './addfostercareparent.component';

describe('AddfostercareparentComponent', () => {
  let component: AddfostercareparentComponent;
  let fixture: ComponentFixture<AddfostercareparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfostercareparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfostercareparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
