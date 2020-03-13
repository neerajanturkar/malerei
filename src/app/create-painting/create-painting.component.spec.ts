import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CreatePaintingComponent } from './create-painting.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatSnackBar, MatSnackBarModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('CreatePaintingComponent', () => {
  let component: CreatePaintingComponent;
  let fixture: ComponentFixture<CreatePaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaintingComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ReactiveFormsModule, MatDatepickerModule ,
        HttpClientTestingModule , RouterModule, RouterTestingModule, MatSnackBarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default image for painting', () => {
    expect(component.imagePreview).toBe('../../assets/upload.jpg');
  });
});
