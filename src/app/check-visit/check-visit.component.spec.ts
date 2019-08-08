import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVisitComponent } from './check-visit.component';

describe('CheckVisitComponent', () => {
  let component: CheckVisitComponent;
  let fixture: ComponentFixture<CheckVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
