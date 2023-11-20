import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPortfolioComponent } from './res-portfolio.component';

describe('ResPortfolioComponent', () => {
  let component: ResPortfolioComponent;
  let fixture: ComponentFixture<ResPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResPortfolioComponent]
    });
    fixture = TestBed.createComponent(ResPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
