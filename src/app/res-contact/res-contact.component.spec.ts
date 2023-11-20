import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResContactComponent } from './res-contact.component';

describe('ResContactComponent', () => {
  let component: ResContactComponent;
  let fixture: ComponentFixture<ResContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResContactComponent]
    });
    fixture = TestBed.createComponent(ResContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
