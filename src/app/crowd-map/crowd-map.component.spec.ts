import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdMapComponent } from './crowd-map.component';

describe('CrowdMapComponent', () => {
  let component: CrowdMapComponent;
  let fixture: ComponentFixture<CrowdMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
