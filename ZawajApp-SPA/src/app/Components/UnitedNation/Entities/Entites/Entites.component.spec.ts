/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntitesComponent } from './Entites.component';

describe('EntitesComponent', () => {
  let component: EntitesComponent;
  let fixture: ComponentFixture<EntitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
