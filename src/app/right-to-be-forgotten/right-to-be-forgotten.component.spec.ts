import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToBeForgottenComponent } from './right-to-be-forgotten.component';

describe('RightToBeForgottenComponent', () => {
  let component: RightToBeForgottenComponent;
  let fixture: ComponentFixture<RightToBeForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightToBeForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightToBeForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
