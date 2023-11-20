import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResGreetingComponent } from './res-greeting.component';

describe('ResGreetingComponent', () => {
  let component: ResGreetingComponent;
  let fixture: ComponentFixture<ResGreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResGreetingComponent]
    });
    fixture = TestBed.createComponent(ResGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
