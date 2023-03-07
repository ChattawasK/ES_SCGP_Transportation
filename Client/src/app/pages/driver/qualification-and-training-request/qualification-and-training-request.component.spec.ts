/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QualificationAndTrainingRequestComponent } from './qualification-and-training-request.component';

describe('QualificationAndTrainingRequestComponent', () => {
  let component: QualificationAndTrainingRequestComponent;
  let fixture: ComponentFixture<QualificationAndTrainingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationAndTrainingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationAndTrainingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
