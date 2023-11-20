import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResMyworkheaderComponent } from './res-myworkheader.component';

describe('ResMyworkheaderComponent', () => {
  let component: ResMyworkheaderComponent;
  let fixture: ComponentFixture<ResMyworkheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResMyworkheaderComponent]
    });
    fixture = TestBed.createComponent(ResMyworkheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
