/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MappingDriverComponent } from './mapping-driver.component';

describe('MappingDriverComponent', () => {
  let component: MappingDriverComponent;
  let fixture: ComponentFixture<MappingDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
