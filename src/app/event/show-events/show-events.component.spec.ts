import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventsComponent } from './show-events.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material';

describe('ShowEventsComponent', () => {
  let component: ShowEventsComponent;
  let fixture: ComponentFixture<ShowEventsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterModule, RouterTestingModule , HttpClientTestingModule , MatSnackBarModule ],
      declarations: [ ShowEventsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
