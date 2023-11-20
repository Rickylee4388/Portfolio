import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSkillsetComponent } from './res-skillset.component';

describe('ResSkillsetComponent', () => {
  let component: ResSkillsetComponent;
  let fixture: ComponentFixture<ResSkillsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResSkillsetComponent]
    });
    fixture = TestBed.createComponent(ResSkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
