import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResIntroductionComponent } from './res-introduction.component';

describe('ResIntroductionComponent', () => {
  let component: ResIntroductionComponent;
  let fixture: ComponentFixture<ResIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResIntroductionComponent]
    });
    fixture = TestBed.createComponent(ResIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
