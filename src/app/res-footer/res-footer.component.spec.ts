import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResFooterComponent } from './res-footer.component';

describe('ResFooterComponent', () => {
  let component: ResFooterComponent;
  let fixture: ComponentFixture<ResFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResFooterComponent]
    });
    fixture = TestBed.createComponent(ResFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
