import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResHeaderComponent } from './res-header.component';

describe('ResHeaderComponent', () => {
  let component: ResHeaderComponent;
  let fixture: ComponentFixture<ResHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResHeaderComponent]
    });
    fixture = TestBed.createComponent(ResHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
