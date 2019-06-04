import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovetokennelComponent } from './removetokennel.component';

describe('RemovetokennelComponent', () => {
  let component: RemovetokennelComponent;
  let fixture: ComponentFixture<RemovetokennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovetokennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovetokennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
