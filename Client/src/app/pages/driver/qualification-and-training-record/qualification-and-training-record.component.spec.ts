/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QualificationAndTrainingRecordComponent } from './qualification-and-training-record.component';

describe('QualificationAndTrainingRecordComponent', () => {
  let component: QualificationAndTrainingRecordComponent;
  let fixture: ComponentFixture<QualificationAndTrainingRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationAndTrainingRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationAndTrainingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
