import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCdnComponent } from './get-cdn.component';

describe('GetCdnComponent', () => {
  let component: GetCdnComponent;
  let fixture: ComponentFixture<GetCdnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCdnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
