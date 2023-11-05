import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkheaderComponent } from './myworkheader.component';

describe('MyworkheaderComponent', () => {
  let component: MyworkheaderComponent;
  let fixture: ComponentFixture<MyworkheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyworkheaderComponent]
    });
    fixture = TestBed.createComponent(MyworkheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
