/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QualificationAndTrainingRecordListComponent } from './qualification-and-training-record-list.component';

describe('QualificationAndTrainingRecordListComponent', () => {
  let component: QualificationAndTrainingRecordListComponent;
  let fixture: ComponentFixture<QualificationAndTrainingRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationAndTrainingRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationAndTrainingRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
